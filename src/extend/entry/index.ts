import namespace from '../../namespace'

const login = () => {
  return namespace.entry.login
}

const register = () => {
  return namespace.entry.register
}

const logout = () => {
  return namespace.entry.logout
}

const entry = {
  login,
  register,
  logout
}

export default entry
