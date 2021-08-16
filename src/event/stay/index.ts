import { EventType } from '../interface'
import prefab from '../../prefab'

const stay = (isPrefab: boolean = true, data?: object) => {
  const obj = {
    type: EventType.stay,
    stayDate:
      prefab().timestamp -
      JSON.parse(window.sessionStorage.getItem('tempListInfo') as string).prefab.timestamp,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  }

  window.sessionStorage.removeItem('tempListInfo')

  return obj
}

export { stay }
