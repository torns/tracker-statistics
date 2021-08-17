import { debounce } from 'lodash'
import { EventType } from '../interface'
import prefab from '../../prefab'

const exposeList = []
const timeStamp: number = 0

const onScroll = (e: Event, dom: HTMLElement) => {
  const { innerHeight, innerWidth } = window
  const { top, left } = dom!.getBoundingClientRect()
  const minHeight: number = dom!.clientHeight <= innerHeight ? dom!.clientHeight : innerHeight
  const minWidth: number = dom!.clientWidth <= innerWidth ? dom!.clientWidth : innerWidth
  let scrollTop: number = dom!.scrollTop

  Array.from(dom!.children).forEach(d => {
    const itemWidth: number = d.clientWidth
    const itemHeight: number = d.clientHeight
    const itemTop: number = d.getBoundingClientRect().top
    const itemLeft: number = d.getBoundingClientRect().left

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
      console.log(scrollTop, '/////')
      console.log(itemTop + itemHeight, '+++++')
      console.log(itemTop + itemHeight - scrollTop, '-----')
      console.log(top + minHeight)
      console.log(d)
    }

    exposeList.push()
  })
}

const expose = (
  value: string,
  containerId: string = '',
  isPrefab: boolean = true,
  data?: object
) => {
  const dom = document.getElementById(containerId) as HTMLElement

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

  const obj = {
    behavior: { type: EventType.expose, value, code: '' },
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  }

  // window.sessionStorage.setItem('tempExpose', JSON.stringify(obj))

  return obj
}

export { expose }
