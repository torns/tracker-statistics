import { EventType } from '../interface'
import prefab from '../../prefab'

const share = (name: string, id: string | number, isPrefab: boolean = true, data?: object) => {
  return { type: EventType.share, name, id, ...{ data }, ...{ prefab: isPrefab ? prefab() : {} } }
}

export { share }
