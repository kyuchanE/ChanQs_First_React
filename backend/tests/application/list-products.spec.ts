import assert from 'node:assert/strict';
import { test } from 'node:test';

import { listProducts } from '../../src/application/use-cases/list-products.js';
import type { ProductRepository } from '../../src/domain/repositories/product-repository.js';
import { MOCK_PRODUCTS } from '../../src/infrastructure/mocks/products.mock.js';

const mockRepository: ProductRepository = {
  async list() {
    return MOCK_PRODUCTS;
  },
  async findById(id) {
    return MOCK_PRODUCTS.find((product) => product.id === id) ?? null;
  },
};

test('listProducts returns mock products', async () => {
  const result = await listProducts(mockRepository);

  assert.equal(result.length, MOCK_PRODUCTS.length);
  assert.deepEqual(result, MOCK_PRODUCTS);
});
