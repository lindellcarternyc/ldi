type Constructable<T> = new (...args: any[]) => T

type DependencyId<T = unknown> = 
  | string
  | Constructable<T>

type DependecyMetadata<T = unknown> = 
  | {
    id: string
    value: T
  } | {
    id: Constructable<T>
    value: T | null
  }

export class Container {
  private readonly dependencies: Map<DependencyId, DependecyMetadata> = new Map()

  set<T>(id: string, value: T): this
  set<T>(construct: Constructable<T>): this
  set<T>(id: DependencyId<T>, value?: T): this {
    let metadata: DependecyMetadata<T>

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

  get<T>(id: DependencyId<T>): T {
    const depedency = this.dependencies.get(id) as DependecyMetadata<T> | undefined

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