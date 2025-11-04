import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  makeGetProductBySlugUseCase,
  makeGetProductsUseCase,
} from "@/application/factories/useCaseFactory";
import { ProductDetailSection } from "@/presentation/components/ProductDetailSection";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const getProductsUseCase = await makeGetProductsUseCase();
  const products = await getProductsUseCase.execute();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const getProductBySlugUseCase = await makeGetProductBySlugUseCase();
  const product = await getProductBySlugUseCase.execute(params.slug);

  if (!product) {
    return {
      title: "Product not found | ChanQ Digital",
    };
  }

  const canonical = `/products/${product.slug}`;

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      type: "article",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: product.seoTitle,
      description: product.seoDescription,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const getProductBySlugUseCase = await makeGetProductBySlugUseCase();
  const product = await getProductBySlugUseCase.execute(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-12 px-6 py-16 md:px-12 md:py-20">
      <ProductDetailSection product={product} />
    </main>
  );
}
