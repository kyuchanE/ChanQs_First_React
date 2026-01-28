import { ProductType } from "@/core/entities/product";

export interface ProductRepository {
  getProducts(): Promise<ProductType[]>;
  getProductBySlug(slug: string): Promise<ProductType | undefined>;
}
