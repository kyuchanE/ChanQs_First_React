import { CategoryMenu } from "@/presentation/components/CategoryMenu";

type CateogryPageProps = {
    searchParams?: {
        id?: number;
    }
}

export default async function CategoryPage({ searchParams }: CateogryPageProps) {

    return (
        <main className="mx-auto flex min-h-screen max-w-screen flex-col gap-16 px-6 py-16 md:px-12 md:py-20">
            <CategoryMenu
                categoryList={[
                    {
                        id: 11,
                        label: "AI",
                        detail: [
                            {
                                id: 0,
                                label: "TTT"
                            },
                            {
                                id: 5,
                                label: "AAAA"
                            },
                            {
                                id: 11,
                                label: "BBGB"
                            },
                        ]
                    },
                    {
                        id: 4,
                        label: "FOOD",
                        detail: [
                            {
                                id: 1,
                                label: "ABCABC"
                            },
                            {
                                id: 9,
                                label: "ZXYYY"
                            },
                            {
                                id: 3,
                                label: "APPLE"
                            },
                        ]
                    },
                    {
                        id: 0,
                        label: "COOL",
                        detail: [
                            {
                                id: 7,
                                label: "123123"
                            },
                            {
                                id: 12,
                                label: "12342434"
                            },
                            {
                                id: 2,
                                label: "555555"
                            },
                        ]
                    },

                ]}
                suggestItemList={[
                    { id: 0, title: "TextItem1", subTitle: "SubTitle!!!!!", itemImg: "https://i.namu.wiki/i/DIWQPMFg_xE7JxIv0-4M5PbXco2d-BynsivSWqt6enqDgXOKw0nuZznBUGV-7FtJilQEY7zxodg1kZcYlQXDJw.webp", prc: 5000 },
                    { id: 1, title: "TextItem2", subTitle: "SubTitle!!!!!@@@@", itemImg: "https://image.edaily.co.kr/images/Photo/files/NP/S/2024/11/PS24110300173.jpg", prc: 23000 },
                    { id: 2, title: "TextItem3", subTitle: "SubTitle!!!!!$$$", itemImg: "https://img1.newsis.com/2019/04/25/NISI20190425_0000315819_web.jpg", prc: 5500 },
                    { id: 3, title: "TextItem4", subTitle: "SubTitle!!!!!#####", itemImg: "https://i.pinimg.com/236x/76/a8/39/76a839c8f78ab9eda625157d6b7c566b.jpg", prc: 102000 },
                ]}
                isHomeComponent={false}
            />
        </main>
    )
}