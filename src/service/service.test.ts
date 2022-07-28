import { ContainerRegistry } from '../container-registry'
import { Service } from './service'

describe(Service, () => {
  it('registers a service in the default container', () => {
    @Service()
    // @ts-ignore:next-line
    class TestClass {

    }

    const testClass = ContainerRegistry.defaultContainer.get<TestClass>(TestClass)
    expect(testClass instanceof TestClass)
  })
})