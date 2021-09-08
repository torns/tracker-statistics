import { InitProps } from './types'
import webStorage from '../../utils/web-storage'

const init = ({
  method,
  url,
  storage = 'sessionStorage',
  usage = 'code',
  platform = window ? 'web' : 'wechat-miniprogram'
}: InitProps): void => {
  if (platform === 'web') {
    webStorage.set('tempInit', { method, url, storage, usage, platform })
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
