import { HomeItemType } from "../entities/homeItem";

export interface HomeItemRepository {
    getHomeItem(): Promise<HomeItemType>;
}