import type { Product } from '../entities/product.js';

export interface ProductRepository {
  list(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
}
