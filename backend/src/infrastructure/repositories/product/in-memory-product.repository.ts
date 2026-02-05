import type { Product } from '../../../domain/entities/product.js';
import type { ProductRepository } from '../../../domain/repositories/product-repository.js';
import { MOCK_PRODUCTS } from '../../mocks/products.mock.js';

export class InMemoryProductRepository implements ProductRepository {
  async list(): Promise<Product[]> {
    return MOCK_PRODUCTS;
  }

  async findById(id: string): Promise<Product | null> {
    return MOCK_PRODUCTS.find((product) => product.id === id) ?? null;
  }
}
