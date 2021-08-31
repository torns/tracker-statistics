import { Method } from 'axios'

interface InitProps {
  url: string
  method: Method
  storage?: 'localStorage' | 'sessionStorage'
}

export { InitProps }
