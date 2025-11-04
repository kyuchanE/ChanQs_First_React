import { createAxiosClient } from "@/infrastructure/http/axiosClient";
import { CompanyHttpRepository } from "@/infrastructure/repositories/companyHttpRepository";
import { ProductHttpRepository } from "@/infrastructure/repositories/productHttpRepository";
import { GetCompanyProfileUseCase } from "@/application/use-cases/getCompanyProfile";
import { GetProductsUseCase } from "@/application/use-cases/getProducts";
import { GetProductBySlugUseCase } from "@/application/use-cases/getProductBySlug";

export const makeGetCompanyProfileUseCase = async (): Promise<GetCompanyProfileUseCase> => {
  const client = await createAxiosClient();
  const repository = new CompanyHttpRepository(client);
  return new GetCompanyProfileUseCase(repository);
};

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
