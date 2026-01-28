import { HomeItemType } from "@/core/entities/homeItem";
import { RemoteHomeItemDTO } from "../dtos/remote/remoteHomeItemDTO";

export const mapperHomeItem = (data: RemoteHomeItemDTO): HomeItemType => {
    let title = data.title
    let headerItems = data.headerItems
    let footerItems = data.footerItems

    return {
        title,
        headerItems,
        footerItems,
    }
} 