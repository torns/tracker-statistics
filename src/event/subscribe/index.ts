import { EventType } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

const subscribe = (
  name: string,
  userId: string | number = '',
  isPrefab: boolean = true,
  data?: object
) => {
  send({
    type: EventType.subscribe,
    name,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { subscribe }
