import { EventType } from '../types'
import prefab from '../../prefab'
import { send } from '../../apis'

const buy = (
  itemId: string,
  userId: string = '',
  isPrefab: boolean = true,
  data?: object
): void => {
  send({
    type: EventType.buy,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { buy }
