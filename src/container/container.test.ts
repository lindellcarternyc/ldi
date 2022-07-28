import { Container } from './container'

const TEST_CONTAINER_ID = 'TEST_CONTAINER_ID'

describe(Container, () => {
  describe('#constructor', () => {
    it('creates a container', () => {
      const container = new Container(TEST_CONTAINER_ID)
      expect(container).toBeDefined();
      expect(container.id).toBe(TEST_CONTAINER_ID)
    })
  })

  describe('#set', () => {
    it('sets am id/value pair and returns the same instance of container', () => {
      const container = new Container(TEST_CONTAINER_ID)
      const c = container.set('a', 1)
      expect(c).toBe(container)
    })

    it('throws an error if no value is provided', () => {
      expect(() => {
        new Container('a').set('a' as any)
      }).toThrow()
    })
  })

  describe('#get', () => {
    it('returns a value if it has been set to a string id', () => {
      const container = new Container(TEST_CONTAINER_ID)
      container.set('a', 1)
      const a = container.get('a')
      expect(a).toBe(1)
    })

    it('throws an error if provided a string id for a value that does not exist', () => {
      expect(() => {
        const container = new Container(TEST_CONTAINER_ID)
        container.get('not-set')
      }).toThrow()
    })
  })

  describe('#set/#get constructable', () => {
    it('sets a constructor to be used for a singleton', () => {
      class TestClass {

      }
      const container = new Container(TEST_CONTAINER_ID)
      container.set(TestClass)
      const t1 = container.get(TestClass)
      const t2 = container.get(TestClass)
      expect(t1).toBe(t2)
    })
  })
})