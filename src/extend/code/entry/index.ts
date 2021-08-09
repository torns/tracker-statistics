import entryNamespace from './namespace'
import { BaseAchieve } from '../interface'

const login: BaseAchieve = data => {
  return { behavior: entryNamespace.login, ...{ data } }
}

const register: BaseAchieve = data => {
  return { behavior: entryNamespace.register, ...{ data } }
}

const logout: BaseAchieve = data => {
  return { behavior: entryNamespace.logout, ...{ data } }
}

const entry = {
  login,
  register,
  logout
}

export default entry
