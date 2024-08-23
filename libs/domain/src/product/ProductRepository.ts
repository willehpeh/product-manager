import { ProductState } from './ProductState';
import { Product } from './Product';

export interface ProductRepository {
  save(product: Product): void;
  setState(productState: ProductState): void;
  find(): Product[];
  findById(id: string): Product;
}
