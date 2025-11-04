import { ProductRepository } from "@/core/repositories/productRepository";
import { Product } from "@/core/entities/product";

export class GetProductBySlugUseCase {
  constructor(private readonly repository: ProductRepository) {}

  execute(slug: string): Promise<Product | undefined> {
    return this.repository.getProductBySlug(slug);
  }
}
