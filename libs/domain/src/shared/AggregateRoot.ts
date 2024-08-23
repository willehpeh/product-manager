import { Entity } from './Entity';
import { EntityId } from './EntityId';

export abstract class AggregateRoot<T extends EntityId> extends Entity<T> {}
