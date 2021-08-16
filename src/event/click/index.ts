import { EventType } from '../interface'
import prefab from '../../prefab'

const click = (name: string, isPrefab: boolean = true, data?: object) => {
  return { type: EventType.click, name, ...{ data }, ...{ prefab: isPrefab ? prefab() : {} } }
}

export { click }
