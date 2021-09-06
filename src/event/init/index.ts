import { InitProps } from './types'

const init = ({
  method,
  url,
  storage = 'sessionStorage',
  type = 'code',
  usage = window ? 'web' : 'wechat-miniprogram'
}: InitProps): void => {
  if (usage === 'web') {
    window.sessionStorage.setItem('tempInit', JSON.stringify({ method, url, storage, type, usage }))
  }

  if (usage === 'wechat-miniprogram') {
    // @ts-ignore
    wx.setStorage({
      key: 'tempInit',
      data: { method, url, storage, type, usage }
    })
  }
}

export { init }
