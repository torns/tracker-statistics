import exposeNamespace from './namespace'
import { EventType } from '../interface'
import prefab from '../../prefab'

const expose = {
  list: (name: string, isPrefab: boolean = true, data?: object) => {
    const obj = {
      behavior: exposeNamespace.list,
      type: EventType.expose,
      name,
      ...{ data },
      ...{ prefab: isPrefab ? prefab() : {} }
    }

    window.sessionStorage.setItem('tempListInfo', JSON.stringify(obj))

    return obj
  },
  detail: (
    name: string,
    title: string,
    id: string | number,
    isPrefab: boolean = true,
    data?: object
  ) => {
    return {
      behavior: exposeNamespace.detail,
      type: EventType.expose,
      name,
      title,
      id,
      ...{ data },
      ...{ prefab: isPrefab ? prefab() : {} }
    }
  },
  home: (isPrefab: boolean = true, data?: object) => {
    return {
      behavior: exposeNamespace.home,
      type: EventType.expose,
      ...{ data },
      ...{ prefab: isPrefab ? prefab() : {} }
    }
  },
  my: (isPrefab: boolean = true, data?: object) => {
    return {
      behavior: exposeNamespace.my,
      type: EventType.expose,
      ...{ data },
      ...{ prefab: isPrefab ? prefab() : {} }
    }
  }
}

export { expose }
