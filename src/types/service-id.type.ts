import { Constructable } from './constructable.type'

export type ServiceId<T = unknown> = string | Constructable<T>