import { EventType } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

const collect = (
  name: string,
  itemId: string | number,
  userId: string | number = '',
  isPrefab: boolean = true,
  data?: object
) => {
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
