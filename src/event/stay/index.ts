import { EventType, BaseProps } from '../types'
import prefab from '../../prefab'
import { send } from '../../apis'
import webStorage from '../../utils/web-storage'

const stay = {
  entry: (): void => {
    webStorage.set('tempStayEntryTimeStamp', new Date().getTime())
  },
  leave: ({ userId, isPrefab = true, data = {} }: BaseProps): void => {
    const duration: number = parseInt(
      String(
        new Date().getTime() / 1000 - webStorage.get('tempStayEntryTimeStamp', 0) / 1000
      ),
      10
    )

    send({
      type: EventType.stay,
      duration,
      userId,
      ...{ data },
      ...{ prefab: isPrefab ? prefab.web : {} }
    })
  }
}

export { stay }
