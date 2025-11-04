import { makeGetCompanyProfileUseCase, makeGetProductsUseCase } from "@/application/factories/useCaseFactory";
import { CompanyOverview } from "@/presentation/components/CompanyOverview";
import { ValuesTimeline } from "@/presentation/components/ValuesTimeline";
import { ProductGrid } from "@/presentation/components/ProductGrid";

export const revalidate = 3600;

export default async function HomePage() {
  const getCompanyProfileUseCase = await makeGetCompanyProfileUseCase();
  const company = await getCompanyProfileUseCase.execute();

  const getProductsUseCase = await makeGetProductsUseCase();
  const products = await getProductsUseCase.execute();

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 md:px-12 md:py-20">
      <CompanyOverview company={company} />
      <ValuesTimeline company={company} />
      <ProductGrid products={products} />
    </main>
  );
}
