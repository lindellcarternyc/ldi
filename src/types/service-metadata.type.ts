import { Constructable } from './constructable.type'

export type ServiceMetadata<T = unknown> =
  | {
      id: string;
      value: T;
    }
  | {
      id: Constructable<T>;
      value: T | null;
    };