import { EventType } from '../interface'
import prefab from '../../prefab'

const like = (name: string, id: string | number, isPrefab: boolean = true, data?: object) => {
  return { type: EventType.like, name, id, ...{ data }, ...{ prefab: isPrefab ? prefab() : {} } }
}

export { like }
