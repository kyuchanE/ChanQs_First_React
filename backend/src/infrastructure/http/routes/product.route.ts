import { Router } from 'express';

import type { ProductRepository } from '../../../domain/repositories/product-repository.js';
import { createProductController } from '../controllers/product.controller.js';

export const createProductRouter = (repo: ProductRepository) => {
  const productRouter = Router();
  const { getProducts } = createProductController(repo);

  productRouter.get('/', getProducts);

  return productRouter;
};
