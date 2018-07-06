/* global describe it expect */
import foo from '../src/index'

describe('with-html', () => {
  it('should be defined', () => {
    expect(foo).toBe('foo')
  })
})
