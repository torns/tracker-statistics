import { EventType } from '../interface'
import prefab from '../../prefab'

const buy = (id: string | number, isPrefab: boolean = true, data?: object) => {
  return { type: EventType.buy, id, ...{ data }, ...{ prefab: isPrefab ? prefab() : {} } }
}

export { buy }
