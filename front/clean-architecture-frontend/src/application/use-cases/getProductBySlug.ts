import { ProductRepository } from "@/core/repositories/productRepository";
import { ProductType } from "@/core/entities/product";

export class GetProductBySlugUseCase {
  constructor(private readonly repository: ProductRepository) { }

  execute(slug: string): Promise<ProductType | undefined> {
    return this.repository.getProductBySlug(slug);
  }
}
