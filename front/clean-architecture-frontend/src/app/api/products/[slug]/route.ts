import { PRODUCTS } from "@/infrastructure/mock/data";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

type RouteContext = {
  params: Promise<{slug: string}>;
};

export async function GET(_request: NextRequest, { params }: RouteContext) {
  const { slug } = await params
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    return Response.json(
      { message: `Product with slug '${slug}' not found.` },
      { status: 404 },
    );
  }

  return Response.json(product);
}
