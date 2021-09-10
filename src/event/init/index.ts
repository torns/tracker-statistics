import { InitProps } from './types'
import webStorage from '../../utils/web-storage'

const init = ({
  method,
  url,
  storage = 'sessionStorage',
  usage = 'code',
  platform = window ? 'web' : 'uni'
}: InitProps): void => {
  console.log(window)

  if (platform === 'web') {
    webStorage.set('tempInit', { method, url, storage, usage, platform })
  }

  if (platform === 'uni') {
    // @ts-ignore
    wx.setStorage({
      key: 'tempInit',
      data: { method, url, storage, usage, platform }
    })
  }
}

export { init }
