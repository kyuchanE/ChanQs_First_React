import { ProductRepository } from "@/core/repositories/productRepository";
import { Product } from "@/core/entities/product";

export class GetProductsUseCase {
  constructor(private readonly repository: ProductRepository) {}

  execute(): Promise<Product[]> {
    return this.repository.getProducts();
  }
}
