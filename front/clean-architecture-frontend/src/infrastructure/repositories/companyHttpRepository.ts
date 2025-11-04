import { AxiosInstance } from "axios";
import { CompanyRepository } from "@/core/repositories/companyRepository";
import { CompanyProfile } from "@/core/entities/company";

type CompanyProfileResponse = CompanyProfile;

export class CompanyHttpRepository implements CompanyRepository {
  constructor(private readonly client: AxiosInstance) {}

  async getProfile(): Promise<CompanyProfile> {
    const { data } = await this.client.get<CompanyProfileResponse>("/company");
    return data;
  }
}
