import { EventType } from '../types'
import { CartProps } from './types'
import prefab from '../../prefab'
import { send } from '../../apis'

const cart = ({ itemId, userId, isPrefab = true, data = {} }: CartProps): void => {
  send({
    type: EventType.cart,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { cart }
