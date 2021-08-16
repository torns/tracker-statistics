import { EventType } from '../interface'
import prefab from '../../prefab'

const unlike = (name: string, id: string | number, isPrefab: boolean = true, data?: object) => {
  return { type: EventType.unlike, name, id, ...{ data }, ...{ prefab: isPrefab ? prefab() : {} } }
}

export { unlike }
