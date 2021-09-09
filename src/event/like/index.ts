import { EventType } from '../types'
import { LikeProps } from './types'
import prefab from '../../prefab'
import { send } from '../../apis'

const like = ({ name, itemId, userId, isPrefab = true, data = {} }: LikeProps): void => {
  send({
    type: EventType.like,
    name,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? (window ? prefab.web : prefab.uni) : {} }
  })
}

export { like }
