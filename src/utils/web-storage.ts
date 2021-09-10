const webStorage = {
  set: (key: string, value: any): void => {
    if (!window) { return }
    window.sessionStorage.setItem(key, JSON.stringify(value))
  },
  get: (key: string, defaultValue: any): any => {
    return window ? JSON.parse(window.sessionStorage.getItem(key) as string) ?? defaultValue : {}
  }
}

export default webStorage
