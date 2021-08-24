import { EventType } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

const cart = (
  itemId: string | number,
  userId: string | number = '',
  isPrefab: boolean = true,
  data?: object
) => {
  send({
    type: EventType.cart,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { cart }
