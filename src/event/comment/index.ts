import { EventType } from '../interface'
import prefab from '../../prefab'

const comment = (name: string, id: string | number, isPrefab: boolean = true, data?: object) => {
  return { type: EventType.comment, ...{ data }, ...{ prefab: isPrefab ? prefab() : {} } }
}

export { comment }
