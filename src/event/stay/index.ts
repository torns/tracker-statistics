import { EventType } from '../interface'
import prefab from '../../prefab'

const stay = (isPrefab: boolean = true, data?: object) => {
  const obj = {
    type: EventType.stay,
    stayDate: '',
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  }

  window.sessionStorage.removeItem('tempListInfo')

  return obj
}

export { stay }
