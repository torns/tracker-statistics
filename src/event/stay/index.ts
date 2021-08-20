import { EventType } from '../interface'
import prefab from '../../prefab'

const stay = {
  entry: () => {
    window.sessionStorage.setItem('tempStayEntryTimeStamp', JSON.stringify(new Date().getTime()))
  },
  leave: (isPrefab: boolean = true, data?: object) => {
    const duration: number = parseInt(
      String(
        new Date().getTime() / 1000 -
          JSON.parse(window.sessionStorage.getItem('tempStayEntryTimeStamp') as string) / 1000
      ),
      10
    )

    const obj = {
      type: EventType.stay,
      duration,
      ...{ data },
      ...{ prefab: isPrefab ? prefab() : {} }
    }

    console.log(obj)
  }
}

export { stay }
