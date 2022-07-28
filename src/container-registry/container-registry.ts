import { Container } from "../container/container"

export class ContainerRegistry {

  static defaultContainer = new Container('__DEFAULT_CONTAINER__')

  constructor() {
    throw new Error(`Container Registry is a 'static' class. Instantiation is prohibited`)
  }
}