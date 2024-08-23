export abstract class ValueObject<T> {
  abstract value(): T;
  abstract equals(other: ValueObject<T>): boolean;
}
