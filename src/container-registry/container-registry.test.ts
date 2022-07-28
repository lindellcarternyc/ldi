import { ContainerRegistry } from './container-registry'

describe(ContainerRegistry, () => {
  it('exists', () => {
    expect(ContainerRegistry).toBeDefined()
  })

  it('is implemented as a static class', () => {
    expect(() => new ContainerRegistry()).toThrow()
  })

  describe('defaultContainer', () => {
    it('uses a default container', () => {
      const defaultContainer = ContainerRegistry.defaultContainer;
      expect(defaultContainer.id).toBe("__DEFAULT_CONTAINER__");
    })
  })
})