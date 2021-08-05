import entryNamespace from './namespace'

const login = (data?: object) => {
  return { ...entryNamespace.login, ...{ data } }
}

const register = (data?: object) => {
  return { ...entryNamespace.register, ...{ data } }
}

const logout = (data?: object) => {
  return { ...entryNamespace.logout, ...{ data } }
}

const entry = {
  login,
  register,
  logout
}

export default entry
