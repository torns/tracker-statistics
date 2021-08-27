import { EventType } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

const buy = (itemId: string, userId: string = '', isPrefab: boolean = true, data?: object) => {
  send({
    type: EventType.buy,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { buy }
