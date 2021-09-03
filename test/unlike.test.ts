import { unlike } from '../src/event/unlike'

describe('unlike test', () => {
  it('the type of name, itemId and userId is string', () => {
    expect(() => unlike({ name: 'shop', itemId: '1', userId: '1' })).toThrow()
  })
  it('the type of isPrefab is boolean', () => {
    expect(() => unlike({ name: 'shop', itemId: '1', userId: '1', isPrefab: true })).toThrow()
    expect(() => unlike({ name: 'shop', itemId: '1', userId: '1', isPrefab: false })).toThrow()
  })
  it('the type of data is object', () => {
    expect(() => unlike({ name: 'shop', itemId: '1', userId: '1', data: { a: '1' } })).toThrow()
  })
})
