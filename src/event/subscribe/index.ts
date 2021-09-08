import { EventType } from '../types'
import prefab from '../../prefab'
import { send } from '../../apis'
import { SubscribeProps } from './types'

const subscribe = ({ name, userId, isPrefab = true, data = {} }: SubscribeProps): void => {
  send({
    type: EventType.subscribe,
    name,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab.web : {} }
  })
}

export { subscribe }
