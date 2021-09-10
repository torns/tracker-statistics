import { webAxios } from '../utils/request/web'
import { uniRequest } from '../utils/request/uni'

export function send(data: any) {
  const platform = window ? 'web' : 'uni'

  if (platform === 'web') {
    const initData = JSON.parse(window.sessionStorage.getItem('tempInit') as string)

    return webAxios({
      url: initData.url,
      method: initData.method,
      data
    })
  } else {
    return uniRequest.middleware({
      url: '',
      method: 'GET'
    })
  }
}
