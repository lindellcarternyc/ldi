import { Constructable } from '../types/constructable.type'
import { ContainerRegistry } from '../container-registry'

export const Service = <T>(): ClassDecorator => {
  return targetConstructor => {
    const id = targetConstructor as unknown as Constructable<T>
    ContainerRegistry.defaultContainer.set(id)
  }
}