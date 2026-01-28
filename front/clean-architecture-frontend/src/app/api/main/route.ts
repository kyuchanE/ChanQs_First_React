import { HOME_ITEM } from "@/infrastructure/mock/data";
import { makeGetHomeItemUseCase } from "@/application/factories/useCaseFactory";

export async function GET() {
    // const getHomeItemUseCase = await makeGetHomeItemUseCase();
    return Response.json(HOME_ITEM);
}