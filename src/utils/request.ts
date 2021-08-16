import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const baseRequestConfig: AxiosRequestConfig = {
  timeout: 6000
}

const service = axios.create(baseRequestConfig)

const err = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

service.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  return config
}, err)

service.interceptors.response.use((response: AxiosResponse) => {
  return response.data
}, err)

export { service as axios }
