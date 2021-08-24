import _ from 'lodash'
import { EventType } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

let ids: Array<number | string> = [] // 当前可视区域的曝光内容
let timeStamp: number = 0 // 曝光内容的时长
let baseObj = {} // 基础埋点对象

// 处理滚动
const onScroll = (e: Event, dom: HTMLElement) => {
  ids = [] // 重置当前可视区域的曝光内容

  const { innerHeight, innerWidth } = window // 可视区域宽高
  const { top, left } = dom!.getBoundingClientRect() // 当前父容器距离顶部和左边的距离
  const minHeight: number = dom!.clientHeight <= innerHeight ? dom!.clientHeight : innerHeight // 当前父容器的高度
  const minWidth: number = dom!.clientWidth <= innerWidth ? dom!.clientWidth : innerWidth // 当前父容器的款度
  let scrollTop: number = dom!.scrollTop // 当前父容器的滚动距离
  let status: boolean = true // 控制当前可视区域的内容是否在一小时内被曝光过
  let prevTimeStamp: number =
    JSON.parse(window.sessionStorage.getItem('tempPrevTimeStamp') as string) ?? 0 // 记录上一次的浏览总时长

  Array.from(dom!.children).forEach((d: Element) => {
    const itemWidth: number = d.clientWidth // 曝光节点的宽度
    const itemHeight: number = d.clientHeight // 曝光节点的高度
    const itemTop: number = d.getBoundingClientRect().top // 曝光节点距离顶部的的距离
    const itemLeft: number = d.getBoundingClientRect().left // 曝光节点距离左边的距离

    // 滚动距离大于节点高度时减掉一份节点高度，计算容器可是区域内的第一个节点的位置
    if (scrollTop > itemHeight + itemTop) {
      scrollTop -= itemHeight
    }

    // 判断item在容器的可是区域内
    if (
      itemTop >= top &&
      itemLeft >= left &&
      itemTop - scrollTop + itemHeight <= top + minHeight &&
      itemLeft + itemWidth <= left + minWidth
    ) {
      const persistedIds = JSON.parse(window.sessionStorage.getItem('tempIds') as string) ?? []
      const persistedTimeStamp =
        JSON.parse(window.sessionStorage.getItem('tempTimeStamp') as string) ?? 0
      const nowTimeStamp = new Date().getTime()
      const id = d.getAttribute('data-id') as string | number

      if (nowTimeStamp - persistedTimeStamp >= 3600000) {
        window.sessionStorage.setItem('tempExposeIds', JSON.stringify([])) // 对ids进行持久化，解决一段时间内只能曝光一次的问题
        window.sessionStorage.setItem('tempExposePrevTimeStamp', JSON.stringify(0)) // 清空浏览总时长
      }

      if (persistedIds.indexOf(id) < 0) {
        ids.push(id)
        persistedIds.push(id)
        status = true
        window.sessionStorage.setItem('tempExposeTimeStamp', JSON.stringify(nowTimeStamp)) // 记录时间戳，在一小时内没有曝光后对ids进行清空
        window.sessionStorage.setItem('tempExposeIds', JSON.stringify(persistedIds)) // 对ids进行持久化，解决一段时间内只能曝光一次的问题
      } else {
        status = false
        console.log('展示区域内的信息以被曝光过！')
      }
    }
  })

  // 当前曝光时长小于缓存中的时长则为重新进入页面的操作，所以对缓存中的时长重置为0
  if (e.timeStamp < prevTimeStamp) {
    prevTimeStamp = 0
  }

  timeStamp = e.timeStamp - prevTimeStamp // 当前曝光时长减去之前曝光时长的总和
  window.sessionStorage.setItem('tempExposePrevTimeStamp', JSON.stringify(e.timeStamp)) // 将新的曝光时长存入缓存中

  if (status) {
    // send(Object.assign(baseObj, { itemIds: ids, duration: parseInt(String(timeStamp / 1000), 10) }))
  }
}

const expose = (
  name: string,
  containerId: string = '',
  userId: string | number = '',
  isPrefab: boolean = true,
  data?: object
) => {
  const dom = document.getElementById(containerId) as HTMLElement

  baseObj = {
    type: EventType.expose,
    name,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  }

  dom.addEventListener(
    'scroll',
    _.debounce(
      (e: Event) => {
        onScroll(e, dom)
      },
      1000,
      { maxWait: 10000 }
    )
  )
}

export { expose }
