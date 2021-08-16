import { EventType } from '../interface'
import prefab from '../../prefab'

const subscribe = (isPrefab: boolean = true, data?: object) => {
  return { type: EventType.subscribe, ...{ data }, ...{ prefab: isPrefab ? prefab() : {} } }
}

export { subscribe }
