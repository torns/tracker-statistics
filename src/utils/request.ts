import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import prefab from '../prefab'

const baseRequestConfig: AxiosRequestConfig = {
  timeout: 6000
}

const service = axios.create(baseRequestConfig)

const err = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

service.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  config.data['prefab'] = prefab

  return config
}, err)

service.interceptors.response.use((response: AxiosResponse) => {
  return response.data
}, err)

export { service as axios }
