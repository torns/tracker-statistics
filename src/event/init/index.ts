import { InitProps } from '../interface'

const init = ({ method, url, storage = 'sessionStorage' }: InitProps): void => {
  window.sessionStorage.setItem('tempInit', JSON.stringify({ method, url, storage }))
}

export { init }
