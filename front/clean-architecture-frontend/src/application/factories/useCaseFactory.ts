import { createAxiosClient } from "@/infrastructure/http/axiosClient";
import { ProductHttpRepository } from "@/infrastructure/repositories/productHttpRepository";
import { GetProductsUseCase } from "@/application/use-cases/getProducts";
import { GetProductBySlugUseCase } from "@/application/use-cases/getProductBySlug";
import { GetHomeItemUseCase } from "../use-cases/getHomeItem";
import { HomeItemHttpRepository } from "@/infrastructure/repositories/homeItemHttpRepository";

export const makeGetProductsUseCase = async (): Promise<GetProductsUseCase> => {
  const client = await createAxiosClient();
  const repository = new ProductHttpRepository(client);
  return new GetProductsUseCase(repository);
};

export const makeGetProductBySlugUseCase = async (): Promise<GetProductBySlugUseCase> => {
  const client = await createAxiosClient();
  const repository = new ProductHttpRepository(client);
  return new GetProductBySlugUseCase(repository);
};

export const makeGetHomeItemUseCase = async (): Promise<GetHomeItemUseCase> => {
  const client = await createAxiosClient();
  const repository = new HomeItemHttpRepository(client);
  return new GetHomeItemUseCase(repository);
}
