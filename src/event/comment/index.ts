import { EventType } from '../types'
import prefab from '../../prefab'
import { send } from '../../apis'

const comment = (
  name: string,
  content: string,
  itemId: string,
  userId: string = '',
  isPrefab: boolean = true,
  data?: object
): void => {
  send({
    type: EventType.comment,
    name,
    content,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { comment }
