import { AggregateRoot } from '../shared/AggregateRoot';
import { ProductId } from './ProductId';
import { ProductName } from './ProductName';
import { ProductState } from './ProductState';
import { ProductRepository } from './ProductRepository';

export class Product extends AggregateRoot<ProductId> {

  private readonly _id: ProductId;
  private _name: ProductName;

  constructor(id: ProductId, name: ProductName, productRepository: ProductRepository) {
    super();
    this._id = id;
    this._name = name;
    productRepository.setState(this.currentState());
  }

  is(other: Product): boolean {
    return this._id.equals(other._id);
  }

  private currentState(): ProductState {
    return new ProductState(this._id.value(), this._name.value());
  }

}
