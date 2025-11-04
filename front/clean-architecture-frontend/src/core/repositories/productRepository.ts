import { Product } from "@/core/entities/product";

export interface ProductRepository {
  getProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
}
