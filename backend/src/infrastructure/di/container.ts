import type { ProductRepository } from '../../domain/repositories/product-repository.js';
import { env } from '../../config/env.js';
import { pool } from '../db/postgres.js';
import { createApiRouter } from '../http/routes/index.js';
import { InMemoryProductRepository } from '../repositories/product/in-memory-product.repository.js';
import {
  PostgresProductRepository,
  type PostgresClient,
} from '../repositories/product/postgres-product.repository.js';

type ContainerOptions = {
  db?: PostgresClient;
};

const buildProductRepository = (options: ContainerOptions): ProductRepository => {
  if (env.NODE_ENV === 'production') {
    const dbClient = options.db ?? pool;
    return new PostgresProductRepository(dbClient);
  } else if (env.NODE_ENV === 'development') {
    const dbClient = options.db ?? pool;
    return new PostgresProductRepository(dbClient);
  }

  return new InMemoryProductRepository();
};

export const buildContainer = (options: ContainerOptions = {}) => {
  const productRepository = buildProductRepository(options);
  const apiRouter = createApiRouter({ productRepository });

  return {
    routers: {
      apiRouter,
    },
    repositories: {
      productRepository,
    },
  };
};
