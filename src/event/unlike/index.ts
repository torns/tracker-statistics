import { EventType } from '../types'
import { UnlikeProps } from './types'
import prefab from '../../prefab'
import { send } from '../../apis'

const unlike = ({ name, itemId, userId = '', isPrefab = true, data = {} }: UnlikeProps): void => {
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
