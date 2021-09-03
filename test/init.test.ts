import { init } from '../src/event/init'

describe('init test', () => {
  it('the type of method and url is string', () => {
    expect(() => init({ method: 'get', url: 'http://www.baidu.com' })).not.toThrow()
  })
  it('storage', () => {
    expect(() =>
      init({ method: 'get', url: 'http://www.baidu.com', storage: 'localStorage' })
    ).not.toThrow()
    expect(() =>
      init({ method: 'get', url: 'http://www.baidu.com', storage: 'sessionStorage' })
    ).not.toThrow()
  })
})
