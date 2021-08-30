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

interface Namespace {
  name: string
  cname: string
  code?: number
}

interface DataProps {
  [dataProps: string]: string | number
}

interface BaseReturn {
  data: DataProps | undefined
  behavior: Namespace
}

interface Init {
  url: string
  method: string
}

export { EventType, Namespace, DataProps, BaseReturn, Init }
