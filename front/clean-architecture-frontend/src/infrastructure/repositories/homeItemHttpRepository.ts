import { HomeItemRepository } from "@/core/repositories/homeItemRepository";
import { RemoteHomeItemDTO } from "../dtos/remote/remoteHomeItemDTO";
import { HomeItemType } from "@/core/entities/homeItem";
import { AxiosInstance } from "axios";
import { mapperHomeItem } from "../mappers/homeItemMapper";


export class HomeItemHttpRepository implements HomeItemRepository {
    constructor(private readonly client: AxiosInstance) { }

    async getHomeItem(): Promise<HomeItemType> {
        const { data } = await this.client.get<RemoteHomeItemDTO>("main")
        return mapperHomeItem(data)
    }
}