import axios, { AxiosInstance } from "axios";
import { ProductRepository } from "@/core/repositories/productRepository";
import { ProductType } from "@/core/entities/product";
import { ProductItem } from "../dtos/remote/product";
import { mapperProduct, mapperProductList } from "../mappers/productMapper";

type ProductListResponse = ProductItem[];
type ProductDetailResponse = ProductItem;

export class ProductHttpRepository implements ProductRepository {
  constructor(private readonly client: AxiosInstance) { }

  async getProducts(): Promise<ProductType[]> {
    const { data } = await this.client.get<ProductListResponse>("/products");
    return mapperProductList(data);
  }

  async getProductBySlug(id: string): Promise<ProductType | undefined> {
    try {
      const { data } = await this.client.get<ProductDetailResponse>(
        `/products/${id}`,
      );
      return mapperProduct(data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return undefined;
      }

      throw error;
    }
  }

}
