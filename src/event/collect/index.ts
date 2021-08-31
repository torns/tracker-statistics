import { EventType } from '../types'
import { CollectProps } from './types'
import prefab from '../../prefab'
import { send } from '../../apis'

const collect = ({ name, itemId, userId = '', isPrefab = true, data = {} }: CollectProps): void => {
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
