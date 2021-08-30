import { EventType } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

const like = (
  name: string,
  itemId: string,
  userId: string = '',
  isPrefab: boolean = true,
  data?: object
): void => {
  send({
    type: EventType.like,
    name,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { like }
