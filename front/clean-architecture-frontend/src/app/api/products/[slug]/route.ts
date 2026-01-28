import { PRODUCTS } from "@/infrastructure/mock/data";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: NextRequest, { params }: RouteContext) {
  const { id } = await params
  const product = PRODUCTS.find((item) => (item.id).toString ?? "" === id);

  if (!product) {
    return Response.json(
      { message: `Product with slug '${id}' not found.` },
      { status: 404 },
    );
  }

  return Response.json(product);
}
