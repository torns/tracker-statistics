import { stay } from '../src/event/stay'

describe('stay test', () => {
  it('entry', () => {
    expect(() => stay.entry()).not.toThrow()
  })
  it('the type of userId is string', () => {
    expect(() => stay.leave({ userId: '1' })).toThrow()
  })
  it('the type of isPrefab is boolean', () => {
    expect(() => stay.leave({ userId: '1', isPrefab: true })).toThrow()
    expect(() => stay.leave({ userId: '1', isPrefab: false })).toThrow()
  })
  it('the type of data is object', () => {
    expect(() => stay.leave({ userId: '1', data: { a: '1' } })).toThrow()
  })
})
