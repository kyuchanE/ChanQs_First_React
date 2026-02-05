import { Router } from 'express';

import type { ProductRepository } from '../../../domain/repositories/product-repository.js';
import { healthRouter } from './health.route.js';
import { createProductRouter } from './product.route.js';

export type ApiRouterDependencies = {
  productRepository: ProductRepository;
};

export const createApiRouter = (deps: ApiRouterDependencies) => {
  const router = Router();

  router.use('/health', healthRouter);
  router.use('/products', createProductRouter(deps.productRepository));

  return router;
};
