import { ValueObject } from './ValueObject';

export abstract class EntityId extends ValueObject<string> {
  equals(other: EntityId): boolean {
    return this.hasSameValueAs(other) && this.hasSameClassAs(other);
  }

  private hasSameValueAs(other: EntityId) {
    return this.value() === other.value();
  }

  private hasSameClassAs(other: EntityId) {
    return this.constructor.name === other.constructor.name;
  }
}
