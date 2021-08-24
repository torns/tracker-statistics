import { axios } from '../utils/request'

export function send(data: any) {
  return axios({
    url: 'http://0.0.0.0:00000/api/sdk/h5',
    method: 'post',
    data
  })
}
