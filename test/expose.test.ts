import { expose } from '../src/event/expose'

describe('expose test', () => {
  it('the type of containerId is string', () => {
    expect(() => expose({ name: 'shop', containerId: 'shopContainer', userId: '1' }))
    expect(() => expose({ name: 'shop', containerId: '', userId: '1' })).not.toThrow()
  })
  it('the type of isPrefab is boolean', () => {
    expect(() => expose({ name: 'shop', containerId: '1', userId: '1', isPrefab: true }))
    expect(() => expose({ name: 'shop', containerId: '1', userId: '1', isPrefab: false }))
  })
  it('the type of data is object', () => {
    expect(() => expose({ name: 'shop', containerId: '1', userId: '1', data: { a: '1' } }))
  })
})
