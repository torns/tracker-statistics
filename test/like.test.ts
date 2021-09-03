import { like } from '../src/event/like'

describe('like test', () => {
  it('the type of name, itemId and userId is string', () => {
    expect(() => like({ name: 'shop', itemId: '1', userId: '1' })).toThrow()
  })
  it('the type of isPrefab is boolean', () => {
    expect(() => like({ name: 'shop', itemId: '1', userId: '1', isPrefab: true })).toThrow()
    expect(() => like({ name: 'shop', itemId: '1', userId: '1', isPrefab: false })).toThrow()
  })
  it('the type of data is object', () => {
    expect(() => like({ name: 'shop', itemId: '1', userId: '1', data: { a: '1' } })).toThrow()
  })
})
