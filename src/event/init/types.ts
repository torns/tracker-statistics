import { Method } from 'axios'

interface InitProps {
  url: string
  method: Method
  storage?: 'localStorage' | 'sessionStorage'
  type?: 'code' | 'visualization'
  usage?: 'web' | 'wechat-miniprogram'
}

export { InitProps }
