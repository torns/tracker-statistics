import { EventType } from '../types'
import prefab from '../../prefab'
import { send } from '../../apis'

const stay = {
  entry: (): void => {
    window.sessionStorage.setItem('tempStayEntryTimeStamp', JSON.stringify(new Date().getTime()))
  },
  leave: (userId: string = '', isPrefab: boolean = true, data?: object): void => {
    const duration: number = parseInt(
      String(
        new Date().getTime() / 1000 -
          JSON.parse(window.sessionStorage.getItem('tempStayEntryTimeStamp') as string) / 1000
      ),
      10
    )

    send({
      type: EventType.stay,
      duration,
      userId,
      ...{ data },
      ...{ prefab: isPrefab ? prefab() : {} }
    })
  }
}

export { stay }
