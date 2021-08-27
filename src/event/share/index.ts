import { EventType } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

const share = (
  name: string,
  itemId: string,
  userId: string = '',
  isPrefab: boolean = true,
  data?: object
) => {
  send({
    type: EventType.share,
    name,
    itemId,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { share }
