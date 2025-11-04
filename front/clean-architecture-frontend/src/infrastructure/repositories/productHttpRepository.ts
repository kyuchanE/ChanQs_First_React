import axios, { AxiosInstance } from "axios";
import { ProductRepository } from "@/core/repositories/productRepository";
import { Product } from "@/core/entities/product";

type ProductListResponse = Product[];
type ProductDetailResponse = Product;

export class ProductHttpRepository implements ProductRepository {
  constructor(private readonly client: AxiosInstance) {}

  async getProducts(): Promise<Product[]> {
    const { data } = await this.client.get<ProductListResponse>("/products");
    return data;
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    try {
      const { data } = await this.client.get<ProductDetailResponse>(
        `/products/${slug}`,
      );
      return data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return undefined;
      }

      throw error;
    }
  }
}
