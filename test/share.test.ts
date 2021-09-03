import { share } from '../src/event/share'

describe('share test', () => {
  it('the type of name, itemId and userId is string', () => {
    expect(() => share({ name: 'shop', itemId: '1', userId: '1' })).toThrow()
  })
  it('the type of isPrefab is boolean', () => {
    expect(() => share({ name: 'shop', itemId: '1', userId: '1', isPrefab: true })).toThrow()
    expect(() => share({ name: 'shop', itemId: '1', userId: '1', isPrefab: false })).toThrow()
  })
  it('the type of data is object', () => {
    expect(() => share({ name: 'shop', itemId: '1', userId: '1', data: { a: '1' } })).toThrow()
  })
})
