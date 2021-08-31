import { EventType } from '../types'
import prefab from '../../prefab'
import { send } from '../../apis'

const collect = (
  name: string,
  itemId: string,
  userId: string = '',
  isPrefab: boolean = true,
  data?: object
): void => {
  send({
    type: EventType.collect,
    name,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { collect }
