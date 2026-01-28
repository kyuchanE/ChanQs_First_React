import { HomeBannerItemType } from "@/core/entities/homeItem";
import { HomeBannerItem } from "../dtos/remote/remoteHomeItemDTO";

export const mapperBannerList = (data: HomeBannerItem[]): HomeBannerItemType[] => {
    return data.map((item) => mapperBanner(item))

}

const mapperBanner = (data: HomeBannerItem): HomeBannerItemType => {
    let imageUrl = data.imageUrl
    let alt = data.alt

    return {
        imageUrl,
        alt
    }
}