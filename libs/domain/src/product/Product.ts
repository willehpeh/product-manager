import { AggregateRoot } from '../shared/AggregateRoot';
import { ProductId } from './ProductId';
import { ProductName } from './ProductName';

export class Product extends AggregateRoot<ProductId> {

  private readonly _id: ProductId;
  private _name: ProductName;

  constructor(id: ProductId, name: ProductName) {
    super();
    this._id = id;
    this._name = name;
  }

  is(other: Product): boolean {
    return this._id.equals(other._id);
  }

}
