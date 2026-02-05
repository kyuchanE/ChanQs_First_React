import type { Product } from '../../../domain/entities/product.js';
import type { ProductRepository } from '../../../domain/repositories/product-repository.js';

type PostgresQueryResult<T> = { rows: T[] };

export type PostgresClient = {
  query<T>(text: string, params?: unknown[]): Promise<PostgresQueryResult<T>>;
};

export class PostgresProductRepository implements ProductRepository {
  private readonly db: PostgresClient;

  constructor(db: PostgresClient) {
    this.db = db;
  }

  async list(): Promise<Product[]> {
    const result = await this.db.query<Product>(
      'SELECT id, name, imageurl AS "imageUrl", description FROM test.products',
    );

    return result.rows;
  }

  async findById(id: string): Promise<Product | null> {
    const result = await this.db.query<Product>(
      'SELECT id, name, image_url AS "imageUrl", description FROM products WHERE id = $1',
      [id],
    );

    return result.rows[0] ?? null;
  }
}
