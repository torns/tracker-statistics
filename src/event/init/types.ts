import { Method } from 'axios'

interface InitProps {
  url: string
  method: Method
  storage?: 'localStorage' | 'sessionStorage'
  usage?: 'code' | 'visualization'
  platform?: 'web' | 'wechat-miniprogram'
}

export { InitProps }
