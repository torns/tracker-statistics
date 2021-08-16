import { EventType } from '../interface'
import prefab from '../../prefab'

const collect = (name: string, id: string | number, isPrefab: boolean = true, data?: object) => {
  return { type: EventType.collect, name, id, ...{ data }, ...{ prefab: isPrefab ? prefab() : {} } }
}

export { collect }
