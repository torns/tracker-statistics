import { EventType, CartProps } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

const cart = ({ itemId, userId = '', isPrefab = true, data = {} }: CartProps): void => {
  send({
    type: EventType.cart,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { cart }
