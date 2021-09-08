import webStorage from '../src/utils/web-storage'

describe('web-storage test', () => {
  it('set test', () => {
    webStorage.set('test', 1)
    expect(JSON.parse(window.sessionStorage.getItem('test') as string)).toBe(1)
  })

  it('get test', () => {
    window.sessionStorage.setItem('test', JSON.stringify(1))
    expect(webStorage.get('test', null)).toBe(1)
    expect(webStorage.get('test1', null)).toBe(null)
  })
})
