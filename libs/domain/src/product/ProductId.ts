import { EntityId } from '../shared/EntityId';
import * as crypto from 'node:crypto';
import { InvalidIdError } from '../shared/InvalidIdError';

export class ProductId extends EntityId {
  private readonly prefix = 'PRODUCT';
  private readonly _value: string;

  constructor(idAsString?: string) {
    super();
    if (!idAsString) {
      this._value = this.generate();
      return;
    }
    if (!this.isValidProductId(idAsString)) {
      throw new InvalidIdError();
    }
    this._value = idAsString;
  }

  value(): string {
    return this._value;
  }

  private generate(): string {
    const uuid = crypto.randomUUID();
    return `${this.prefix}-${uuid}`;
  }

  private isValidProductId(idAsString: string): boolean {
    return idAsString.length > 0;
  }
}
