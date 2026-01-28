import { HomeItemType } from "@/core/entities/homeItem";
import { HomeItemRepository } from "@/core/repositories/homeItemRepository";

export class GetHomeItemUseCase {
    constructor(private readonly repository: HomeItemRepository) { }

    execute(): Promise<HomeItemType> {
        return this.repository.getHomeItem();
    }
}