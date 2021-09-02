import { cart } from '../src/event/cart'

/**
 * cart test
 */
describe('cart test', () => {
  it('the type of itemId and userId is string', () => {
    expect(() => cart({ itemId: '1', userId: '1' })).toThrow()
  })
})
