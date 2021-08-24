import { EventType } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

const comment = (
  name: string,
  content: string,
  itemId: string | number,
  userId: string | number = '',
  isPrefab: boolean = true,
  data?: object
) => {
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
