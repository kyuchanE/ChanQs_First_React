import type { Request, Response } from 'express';

import { listProducts } from '../../../application/use-cases/list-products.js';

export const getProducts = (_req: Request, res: Response) => {
  const products = listProducts();

  res.json({
    items: products,
    count: products.length,
  });
};
