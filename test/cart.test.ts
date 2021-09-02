import { cart } from '../src/event/cart'

/**
 * cart test
 */
describe('cart test', () => {
  it('the type of itemId and userId is string', () => {
    expect(() => cart({ itemId: '1', userId: '1' })).toThrow()
  })
  it('the type of isPrefab is boolean', () => {
    expect(() => cart({ itemId: '1', userId: '1', isPrefab: true })).toThrow()
    expect(() => cart({ itemId: '1', userId: '1', isPrefab: false })).toThrow()
  })
  it('the type of data is object', () => {
    expect(() => cart({ itemId: '1', userId: '1', data: { a: '1' } })).toThrow()
  })
})
