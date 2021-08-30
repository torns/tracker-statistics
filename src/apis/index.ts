import { axios } from '../utils/request'

export function send(data: any) {
  const initData = JSON.parse(window.sessionStorage.getItem('tempInit') as string)

  return axios({
    url: initData.url,
    method: initData.method,
    data
  })
}
