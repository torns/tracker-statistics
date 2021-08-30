import { EventType, ClickProps } from '../interface'
import prefab from '../../prefab'
import { send } from '../../apis'

const click = ({ name, userId = '', isPrefab = true, data = {} }: ClickProps): void => {
  send({
    type: EventType.click,
    name,
    userId,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  })
}

export { click }
