type Primitive = 
  | string
  | number
  | boolean

const isPrimitive = (dep: Dependency): dep is Primitive => {
  return typeof dep !== 'function'
}

type Contstructable<T = unknown> = new (...args: any[]) => T

type Dependency<T = unknown> = 
  | Primitive
  | Contstructable<T>

type DependencyId<T = unknown> = 
  | string
  | Contstructable<T>

export class Container {
  private dependecies: Map<DependencyId, Dependency> = new Map()

  set<I>(id: DependencyId<I>, value: Dependency) {
    if (isPrimitive(value)) {
      this.dependecies.set(id, value)
    } else {
      if (!this.dependecies.has(id)) { 
        this.dependecies.set(id, new value() as Dependency)
      }
    }
  }

  get<T>(id: DependencyId): Dependency<T> {
    const dep = this.dependecies.get(id)
    if (dep) return dep as Dependency<T>

    throw new Error(`Can't resolve dependency '${id}'`)
  }
}