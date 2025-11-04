import { PRODUCTS } from "@/infrastructure/mock/data";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

type Params = {
  params: {
    slug: string;
  };
};

export async function GET(_request: NextRequest, { params }: Params) {
  const product = PRODUCTS.find((item) => item.slug === params.slug);

  if (!product) {
    return Response.json(
      { message: `Product with slug '${params.slug}' not found.` },
      { status: 404 },
    );
  }

  return Response.json(product);
}
