import { comment } from '../src/event/comment'

describe('comment test', () => {
  it('the type of name, content, itemId and userId is string', () => {
    expect(() => comment({ name: 'shop', content: 'content', itemId: '1', userId: '1' })).toThrow()
  })
  it('the type of isPrefab is boolean', () => {
    expect(() =>
      comment({ name: 'shop', content: 'content', itemId: '1', userId: '1', isPrefab: true })
    ).toThrow()
    expect(() =>
      comment({ name: 'shop', content: 'content', itemId: '1', userId: '1', isPrefab: false })
    ).toThrow()
  })
  it('the type of data is object', () => {
    expect(() =>
      comment({ name: 'shop', content: 'content', itemId: '1', userId: '1', data: { a: '1' } })
    ).toThrow()
  })
})
