enum EventType {
  expose, // 曝光
  click, // 点击
  cart, // 加入购物车
  buy, // 购买
  collect, // 收藏
  like, // 点赞
  unlike, // 点衰
  comment, // 写评论
  share, // 分享
  subscribe, // 订阅
  stay // 停留
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

export { EventType, Namespace, DataProps, BaseReturn }
