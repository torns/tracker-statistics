const webStorage = {
  set: (key: string, value: any): void => {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  },
  get: (key: string, defaultValue: any): any => {
    return JSON.parse(window.sessionStorage.getItem(key) as string) ?? defaultValue
  }
}

export default webStorage
