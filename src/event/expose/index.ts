import { debounce } from 'lodash'
import { EventType } from '../interface'
import prefab from '../../prefab'

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

  Array.from(dom!.children).forEach(d => {
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
      const id = d.getAttribute('data-id') as string | number

      if (persistedIds.indexOf(id) < 0) {
        ids.push(id)
        persistedIds.push(id)
        status = true
        window.sessionStorage.setItem('tempIds', JSON.stringify(persistedIds)) // 对ids进行持久化，解决一段时间内只能曝光一次的问题
      } else {
        status = false
        console.log('展示区域内的信息以被曝光过！')
      }
    }
  })

  timeStamp = (e.timeStamp - timeStamp) / 1000

  if (status) {
    console.log(Object.assign(baseObj, { ids, timeStamp: parseInt(String(timeStamp), 10) }))
  }
}

const expose = (
  value: string,
  containerId: string = '',
  isPrefab: boolean = true,
  data?: object
) => {
  const dom = document.getElementById(containerId) as HTMLElement

  baseObj = {
    behavior: { type: EventType.expose, value, code: '' },
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  }

  dom.addEventListener(
    'scroll',
    debounce(
      (e: Event) => {
        onScroll(e, dom)
      },
      1000,
      { maxWait: 10000 }
    )
  )
}

export { expose }
