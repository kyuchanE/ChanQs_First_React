import { CompanyProfile } from "@/core/entities/company";

export interface CompanyRepository {
  getProfile(): Promise<CompanyProfile>;
}
