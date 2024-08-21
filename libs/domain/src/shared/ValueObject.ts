export abstract class ValueObject<T extends string | boolean | number> {

  abstract value(): T;
  abstract toString(): string;

  equals(other: ValueObject<T>): boolean {
    return (
      other.value() === this.value() &&
      other.constructor.name === this.constructor.name
    );
  }
}
