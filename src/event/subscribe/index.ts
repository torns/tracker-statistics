import { EventType } from '../types'
import prefab from '../../prefab'
import { send } from '../../apis'

const subscribe = (
  name: string,
  userId: string = '',
  isPrefab: boolean = true,
  data?: object
): void => {
  send({
    type: EventType.subscribe,
    name,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { subscribe }
