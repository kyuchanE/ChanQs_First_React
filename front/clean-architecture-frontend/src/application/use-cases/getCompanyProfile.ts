import { CompanyRepository } from "@/core/repositories/companyRepository";
import { CompanyProfile } from "@/core/entities/company";

export class GetCompanyProfileUseCase {
  constructor(private readonly repository: CompanyRepository) {}

  execute(): Promise<CompanyProfile> {
    return this.repository.getProfile();
  }
}
