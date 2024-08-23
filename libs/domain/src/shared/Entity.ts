import { EntityId } from './EntityId';

export abstract class Entity<T extends EntityId> {

  private readonly _id: T;

  constructor(id: T) {
    this._id = id;
  }

  is(entity: Entity<T>): boolean {
    return this.id().equals(entity.id());
  };

  private id(): T {
    return this._id;
  }

}
