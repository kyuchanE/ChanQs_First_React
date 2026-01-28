import { ProductRepository } from "@/core/repositories/productRepository";
import { ProductType } from "@/core/entities/product";

export class GetProductsUseCase {
  constructor(private readonly repository: ProductRepository) { }

  execute(): Promise<ProductType[]> {
    return this.repository.getProducts();
  }
}
