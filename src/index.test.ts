import { add } from './index'

describe(add, () => {
  it('adds 2 numbers together', () => {
    expect(add(1, 1)).toBe(2)
  })
})