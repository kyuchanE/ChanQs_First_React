import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-12 px-6 py-16 md:px-12 md:py-20">
    </main>
  );
}
