import type { Request, Response } from 'express';

import { listProducts } from '../../../application/use-cases/list-products.js';
import type { ProductRepository } from '../../../domain/repositories/product-repository.js';

export const createProductController = (repo: ProductRepository) => ({
  getProducts: async (_req: Request, res: Response) => {
    const products = await listProducts(repo);

    res.json({
      items: products,
      count: products.length,
    });
  },
});
