import { AggregateRoot } from '../shared/AggregateRoot';
import { ProductId } from './ProductId';

export class Product extends AggregateRoot<ProductId> {
  private readonly _id: ProductId;

  constructor(id: ProductId) {
    super();
    this._id = id;
  }

  is(entity: Product): boolean {
    return this._id.equals(entity._id);
  }

}
