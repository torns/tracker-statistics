import { EventType } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

const unlike = (
  name: string,
  itemId: string,
  userId: string = '',
  isPrefab: boolean = true,
  data?: object
): void => {
  send({
    type: EventType.unlike,
    name,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { unlike }
