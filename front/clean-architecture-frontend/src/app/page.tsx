import { makeGetCompanyProfileUseCase, makeGetProductsUseCase } from "@/application/factories/useCaseFactory";
import { CompanyOverview } from "@/presentation/components/CompanyOverview";
import { ValuesTimeline } from "@/presentation/components/ValuesTimeline";
import { ProductGrid } from "@/presentation/components/ProductGrid";
import { HeroCarousel } from "@/presentation/components/HeroCarousel";

export const revalidate = 3600;

export default async function HomePage() {
  const getCompanyProfileUseCase = await makeGetCompanyProfileUseCase();
  const company = await getCompanyProfileUseCase.execute();

  const getProductsUseCase = await makeGetProductsUseCase();
  const products = await getProductsUseCase.execute();

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-16 md:px-12 md:py-20">
      <CompanyOverview company={company} />
      <HeroCarousel
        slides={
          [
            { src: "https://live.lge.co.kr/wp-content/uploads/2020/06/AI%EC%9A%A9%EC%96%B4%EC%82%AC%EC%A0%84_00-1-1.jpg", alt: "첫 번째 배너" },
            { src: "https://cdn.freezinenews.com/news/photo/202411/2223_2819_4941.jpg", alt: "두 번째 배너" },
            { src: "https://live.lge.co.kr/wp-content/uploads/2020/06/AI%EC%9A%A9%EC%96%B4%EC%82%AC%EC%A0%84_00-1-1.jpg", alt: "세 번째 배너" },
          ]
        }
        autoPlayMS={4500}
        overlay={{
          logoSrc: "https://image.ajunews.com/content/image/2022/05/22/20220522133152595561.jpg",
          title: "ChanQ!!!",
          subtitle: "SubTitle!!!!!!!!!!!!!"
        }}
        className="rounded-2xl"
      />
      <ValuesTimeline company={company} />
      <ProductGrid products={products} />
    </main>
  );
}
