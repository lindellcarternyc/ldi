import { Constructable } from '../types/constructable.type'
import { ServiceId } from '../types/service-id.type'
import { ServiceMetadata } from '../types/service-metadata.type'


export class Container {
  private readonly dependencies: Map<ServiceId, ServiceMetadata> = new Map()

  constructor(readonly id: string) { }

  set<T>(id: string, value: T): this
  set<T>(construct: Constructable<T>): this
  set<T>(id: ServiceId<T>, value?: T): this {
    let metadata: ServiceMetadata<T>

    if (typeof id === 'string') {
      if (arguments.length === 2) {
        metadata = {
          id,
          value: value as T
        }
      } else {
        throw new Error(`Can't set depedency '${id}' without a value`)
      }
    } else {
      metadata = {
        id,
        value: null
      }
    }

    this.dependencies.set(id, metadata)

    return this
  }

  get<T>(id: ServiceId<T>): T {
    const depedency = this.dependencies.get(id) as ServiceMetadata<T> | undefined

    if (depedency) {
      if (typeof depedency.id === 'string') return depedency.value!

      if (depedency.value === null) {
        depedency.value === new depedency.id()
      }

      return depedency.value!
    }

    throw new Error(`Cannot resolve dependency: '${id.toString()}'`)
  }
}