import { COMPANY_PROFILE } from "@/infrastructure/mock/data";

export const dynamic = "force-static";

export async function GET() {
  return Response.json(COMPANY_PROFILE);
}
