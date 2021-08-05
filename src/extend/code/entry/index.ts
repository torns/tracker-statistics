import entryNamespace from './namespace'

const login = (data?: object) => {
  return { behavior: entryNamespace.login, ...{ data } }
}

const register = (data?: object) => {
  return { behavior: entryNamespace.register, ...{ data } }
}

const logout = (data?: object) => {
  return { behavior: entryNamespace.logout, ...{ data } }
}

const entry = {
  login,
  register,
  logout
}

export default entry
