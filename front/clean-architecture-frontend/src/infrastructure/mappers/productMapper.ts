import { ProductType } from "@/core/entities/product";
import { ProductItem } from "../dtos/remote/product";

export const mapperProduct = (data: ProductItem): ProductType => {
    let id = data.id
    let name = data.name
    let summary = data.summary
    let tag = data.tag
    let description = data.description
    let category = data.category
    let imageUrl = data.imageUrl
    let price = data.price
    let seoTitle = data.seoTitle
    let seoDescription = data.seoDescription

    return {
        id,
        name,
        summary,
        tag,
        description,
        category,
        imageUrl,
        price,
        seoTitle,
        seoDescription,
    }
}

export const mapperProductList = (data: ProductItem[]): ProductType[] => {
    return data.map((item) => mapperProduct(item))
}