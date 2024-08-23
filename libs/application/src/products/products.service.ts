import { ProductRepository } from '@product-manager/domain';

export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}
}
