import { EventType } from '../types'
import { BuyProps } from './types'
import prefab from '../../prefab'
import { send } from '../../apis'

const buy = ({ itemId, userId, isPrefab = true, data = {} }: BuyProps): void => {
  send({
    type: EventType.buy,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? (window ? prefab.web : prefab.uni) : {} }
  })
}

export { buy }
