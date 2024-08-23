import { EntityId } from '../shared/EntityId';
import { InvalidIdError } from '../shared/InvalidIdError';
import * as crypto from 'node:crypto';

export class ProductId extends EntityId {

  private static readonly prefix = 'PRODUCT';

  private readonly _value: string;

  private constructor(idAsString: string) {
    super();
    this._value = idAsString;
  }

  value(): string {
    return this._value;
  }

  static new(): ProductId {
    const id = this.generate();
    return new ProductId(id);
  }

  static fromString(idAsString: string): ProductId {
    if (!this.isValidProductId(idAsString)) {
      throw new InvalidIdError();
    }
    return new ProductId(idAsString);
  }

  private static generate(): string {
    const uuid = crypto.randomUUID();
    return `${ this.prefix }-${ uuid }`;
  }

  private static isValidProductId(idAsString: string): boolean {
    return idAsString.length > 0;
  }
}
