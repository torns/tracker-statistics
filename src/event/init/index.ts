import { Init } from '../interface'

const init = (data: Init): void => {
  window.sessionStorage.setItem('tempInit', JSON.stringify(data))
}

export { init }
