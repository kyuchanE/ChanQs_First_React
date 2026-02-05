import type { ProductRepository } from '../../domain/repositories/product-repository.js';

export const listProducts = async (repo: ProductRepository) =>
  repo.list();
