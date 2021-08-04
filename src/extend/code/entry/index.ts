import entryNamespace from './namespace'

const login = (data?: object) => {
  return Object.assign(entryNamespace.login, { data })
}

const register = (data?: object) => {
  return Object.assign(entryNamespace.register, { data })
}

const logout = (data?: object) => {
  return Object.assign(entryNamespace.logout, { data })
}

const entry = {
  login,
  register,
  logout
}

export default entry
