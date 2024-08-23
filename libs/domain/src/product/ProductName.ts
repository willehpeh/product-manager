import { ValueObject } from '../shared/ValueObject';

export class ProductName extends ValueObject<string> {

  private readonly default = 'Untitled Product';
  private readonly _value: string;

  constructor(nameAsString?: string) {
    super();
    if (!nameAsString) {
      this._value = this.default;
      return;
    }
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

  private isValidProductName(nameAsString: string): boolean {
    return nameAsString.length > 0;
  }

}
