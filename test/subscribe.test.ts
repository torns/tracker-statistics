import { subscribe } from '../src/event/subscribe'

describe('subscribe test', () => {
  it('the type of name and userId is string', () => {
    expect(() => subscribe({ name: 'shop', userId: '1' })).toThrow()
  })
  it('the type of isPrefab is boolean', () => {
    expect(() => subscribe({ name: 'shop', userId: '1', isPrefab: true })).toThrow()
    expect(() => subscribe({ name: 'shop', userId: '1', isPrefab: false })).toThrow()
  })
  it('the type of data is object', () => {
    expect(() => subscribe({ name: 'shop', userId: '1', data: { a: '1' } })).toThrow()
  })
})
