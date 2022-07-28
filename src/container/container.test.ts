import { Container } from './container'

describe(Container, () => {
  let container: Container
  beforeEach(() => {
    container = new Container()
  })

  it('exists', () => {
    expect(container).toBeDefined()
  })

  describe('#set', () => {
    it('sets am id/value pair and returns the same instance of container', () => {
      const c = container.set('a', 1)
      expect(c).toBe(container)
    })
  })

  describe('#get', () => {
    it('returns a value if it has been set to a string id', () => {
      container.set('a', 1)
      const a = container.get('a')
      expect(a).toBe(1)
    })
  })

  describe('#set/#get constructable', () => {
    it('sets a constructor to be used for a singleton', () => {
      class TestClass {

      }

      container.set(TestClass)
      const t1 = container.get(TestClass)
      const t2 = container.get(TestClass)
      expect(t1).toBe(t2)
    })
  })
})