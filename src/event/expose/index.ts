import { EventType } from '../interface'
import prefab from '../../prefab'

const tempExpose: any[] = []

const expose = (
  value: string,
  id: string | number | null = null,
  containerId: string | null = null,
  isPrefab: boolean = true,
  data?: object
) => {
  tempExpose.push(id)

  setInterval(() => {
    console.log(tempExpose)
  }, 1000)

  const obj = {
    behavior: { type: EventType.expose, value, code: '' },
    id,
    ...{ data },
    ...{ prefab: isPrefab ? prefab() : {} }
  }

  // window.sessionStorage.setItem('tempExpose', JSON.stringify(obj))

  return obj
}

export { expose }
