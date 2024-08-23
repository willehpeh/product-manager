import { EntityId } from './EntityId';

export abstract class Entity<T extends EntityId> {
  abstract is(entity: Entity<T>): boolean;
}
