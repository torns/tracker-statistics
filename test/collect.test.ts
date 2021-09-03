import { collect } from '../src/event/collect'

describe('collect test', () => {
  it('the type of name, itemId and userId is string', () => {
    expect(() => collect({ name: 'shop', itemId: '1', userId: '1' })).toThrow()
  })
  it('the type of isPrefab is boolean', () => {
    expect(() => collect({ name: 'shop', itemId: '1', userId: '1', isPrefab: true })).toThrow()
    expect(() => collect({ name: 'shop', itemId: '1', userId: '1', isPrefab: false })).toThrow()
  })
  it('the type of data is object', () => {
    expect(() => collect({ name: 'shop', itemId: '1', userId: '1', data: { a: '1' } })).toThrow()
  })
})
