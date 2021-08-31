import { EventType } from '../types'
import { CommentProps } from './types'
import prefab from '../../prefab'
import { send } from '../../apis'

const comment = ({
  name,
  content,
  itemId,
  userId = '',
  isPrefab = true,
  data = {}
}: CommentProps): void => {
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
