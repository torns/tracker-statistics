import { EventType } from '../types'
import { ShareProps } from './types'
import prefab from '../../prefab'
import { send } from '../../apis'

const share = ({ name, itemId, userId, isPrefab = true, data = {} }: ShareProps): void => {
  send({
    type: EventType.share,
    name,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? (window ? prefab.web : prefab.uni) : {} }
  })
}

export { share }
