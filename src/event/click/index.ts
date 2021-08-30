import { EventType } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

const click = (
  name: string,
  userId: string = '',
  isPrefab: boolean = true,
  data?: object
): void => {
  send({
    type: EventType.click,
    name,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { click }
