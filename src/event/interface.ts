import { Method } from 'axios'

enum EventType {
  expose = 'expose', // 曝光
  click = 'click', // 点击
  cart = 'cart', // 加入购物车
  buy = 'buy', // 购买
  collect = 'collect', // 收藏
  like = 'like', // 点赞
  unlike = 'unlike', // 点衰
  comment = 'comment', // 写评论
  share = 'share', // 分享
  subscribe = 'subscribe', // 订阅
  stay = 'stay' // 停留
}

interface InitProps {
  url: string
  method: Method
  storage?: 'localStorage' | 'sessionStorage'
}

interface DataProps {
  [dataProps: string]: string | number
}

interface BaseProps {
  data?: DataProps
  isPrefab?: boolean
  userId: string
}

interface ExposeProps extends BaseProps {
  containerId: string
  name: string
}

interface ClickProps extends BaseProps {
  name: string
}

export { EventType, InitProps, ExposeProps, ClickProps }
