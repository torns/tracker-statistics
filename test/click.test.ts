import { click } from '../src/event/click'

describe('click test', () => {
  it('the type of name and userId is string', () => {
    expect(() => click({ name: 'shop', userId: '1' })).toThrow()
  })
  it('the type of isPrefab is boolean', () => {
    expect(() => click({ name: 'shop', userId: '1', isPrefab: true })).toThrow()
    expect(() => click({ name: 'shop', userId: '1', isPrefab: false })).toThrow()
  })
  it('the type of data is object', () => {
    expect(() => click({ name: 'shop', userId: '1', data: { a: '1' } })).toThrow()
  })
})
