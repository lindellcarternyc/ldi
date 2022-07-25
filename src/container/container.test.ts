import { Container } from './container'

describe(Container, () => {
  let container: Container
  beforeEach(() => {
    container = new Container()
  })

  it('exists', () => {
    expect(Container).toBeDefined()
  })

  describe('#set/#get', () => {
    it('registers primitive values', () => {
      const values: [string, number | string | boolean][] = [
        ['a', 1],
        ['b', true],
        ['c', 'hello']
      ]

      for (const [id, val] of values) {
        container.set(id, val)
        expect(container.get<typeof val>(id)).toBe(val)
      }
    })

    describe('classes', () => {
      class Test {

      }

      it('uses singletons by default when registering by class name', () => {
        container.set(Test, Test)
        container.set(Test, Test)

        const a = container.get(Test)
        const b = container.get(Test)
        expect(a).toBe(b)
      })
    })
  })
})