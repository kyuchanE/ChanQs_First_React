import { makeGetCompanyProfileUseCase, makeGetProductsUseCase } from "@/application/factories/useCaseFactory";
import { CompanyOverview } from "@/presentation/components/CompanyOverview";
import { ValuesTimeline } from "@/presentation/components/ValuesTimeline";
import { ProductGrid } from "@/presentation/components/ProductGrid";
import { HeroCarousel } from "@/presentation/components/HeroCarousel";
import { CategoryMenu } from "@/presentation/components/CategoryMenu";

export const revalidate = 3600;

export default async function HomePage() {
  const getCompanyProfileUseCase = await makeGetCompanyProfileUseCase();
  const company = await getCompanyProfileUseCase.execute();

  const getProductsUseCase = await makeGetProductsUseCase();
  const products = await getProductsUseCase.execute();

  return (
    <main className="mx-auto flex min-h-screen max-w-screen flex-col gap-16 px-6 py-16 md:px-12 md:py-20">
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

      <CategoryMenu
        categoryList={[
          {
            id: 11,
            label: "AI",
            detail: [
              {
                id: 0,
                label: "TTT"
              },
              {
                id: 5,
                label: "AAAA"
              },
              {
                id: 11,
                label: "BBGB"
              },
            ]
          },
          {
            id: 4,
            label: "FOOD",
            detail: [
              {
                id: 1,
                label: "ABCABC"
              },
              {
                id: 9,
                label: "ZXYYY"
              },
              {
                id: 3,
                label: "APPLE"
              },
            ]
          },
          {
            id: 0,
            label: "COOL",
            detail: [
              {
                id: 7,
                label: "123123"
              },
              {
                id: 12,
                label: "12342434"
              },
              {
                id: 2,
                label: "555555"
              },
            ]
          },

        ]}
        suggestItemList={[
          { id: 0, title: "TextItem1", subTitle: "SubTitle!!!!!", itemImg: "https://i.namu.wiki/i/DIWQPMFg_xE7JxIv0-4M5PbXco2d-BynsivSWqt6enqDgXOKw0nuZznBUGV-7FtJilQEY7zxodg1kZcYlQXDJw.webp", prc: 5000 },
          { id: 1, title: "TextItem2", subTitle: "SubTitle!!!!!@@@@", itemImg: "https://image.edaily.co.kr/images/Photo/files/NP/S/2024/11/PS24110300173.jpg", prc: 23000 },
          { id: 2, title: "TextItem3", subTitle: "SubTitle!!!!!$$$", itemImg: "https://img1.newsis.com/2019/04/25/NISI20190425_0000315819_web.jpg", prc: 5500 },
          { id: 3, title: "TextItem4", subTitle: "SubTitle!!!!!#####", itemImg: "https://i.pinimg.com/236x/76/a8/39/76a839c8f78ab9eda625157d6b7c566b.jpg", prc: 102000 },
        ]}
      // onSelect={(id) => console.log("click:", id)}
      />

      {/* <CompanyOverview company={company} />
      <ValuesTimeline company={company} />
      <ProductGrid products={products} /> */}
    </main>
  );
}
