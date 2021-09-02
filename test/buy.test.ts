import { buy } from '../src/event/buy'

/**
 * buy test
 */
describe('buy test', () => {
  it('the type of itemId and userId is string', () => {
    expect(() => buy({ itemId: '1', userId: '1' })).toThrow()
  })
  it('the type of isPrefab is boolean', () => {
    expect(() => buy({ itemId: '1', userId: '1', isPrefab: true })).toThrow()
    expect(() => buy({ itemId: '1', userId: '1', isPrefab: false })).toThrow()
  })
})
