import { EventType } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

const unlike = (
  name: string,
  itemId: string | number,
  userId: string | number = '',
  isPrefab: boolean = true,
  data?: object
) => {
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
