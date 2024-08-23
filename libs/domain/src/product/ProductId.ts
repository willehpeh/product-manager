import { EntityId, InvalidIdError } from '../shared';

export class ProductId extends EntityId {
  private readonly _value: string;

  constructor(idAsString: string) {
    super();
    if (!this.isValidProductId(idAsString)) {
      throw new InvalidIdError();
    }
    this._value = idAsString;
  }

  value(): string {
    return this._value;
  }

  private isValidProductId(idAsString: string): boolean {
    return idAsString.length > 0;
  }
}
