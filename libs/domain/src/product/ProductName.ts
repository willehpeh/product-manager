import { ValueObject } from '../shared';

export class ProductName extends ValueObject<string> {
  private readonly _value: string;

  constructor(nameAsString: string) {
    super();
    if (!this.isValidProductName(nameAsString)) {
      throw new Error('Invalid value for product name');
    }
    this._value = nameAsString;
  }

  equals(other: ProductName): boolean {
    return other.value() === this.value() && other.constructor.name === this.constructor.name;
  }

  value(): string {
    return this._value;
  }

  private isValidProductName(name: string): boolean {
    return name.length > 0;
  }

}
