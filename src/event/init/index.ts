import { InitProps } from './types'

const init = ({
  method,
  url,
  storage = 'sessionStorage',
  usage = 'code',
  platform = window ? 'web' : 'wechat-miniprogram'
}: InitProps): void => {
  if (platform === 'web') {
    window.sessionStorage.setItem('tempInit', JSON.stringify({ method, url, storage, usage, platform }))
  }

  if (platform === 'wechat-miniprogram') {
    // @ts-ignore
    wx.setStorage({
      key: 'tempInit',
      data: { method, url, storage, usage, platform }
    })
  }
}

export { init }
