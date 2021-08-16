import { EventType } from '../interface'
import prefab from '../../prefab'

const cart = (id: string | number, isPrefab: boolean = true, data?: object) => {
  return { type: EventType.cart, id, ...{ data }, ...{ prefab: isPrefab ? prefab() : {} } }
}

export { cart }
