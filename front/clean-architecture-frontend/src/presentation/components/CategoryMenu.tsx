'use client';

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import path from "path";
import { useLayoutEffect, useRef, useState } from "react";

type Category = {
    id: number;
    label: string;
    detail: CategorySub[];
}

type CategorySub = {
    id: number;
    label: string;
}

type SuggestItem = {
    id: number;
    itemImg: string;
    title: string;
    subTitle: string;
    prc: number;
}

type CategoryMenuProps = {
    categoryList: Category[];
    suggestItemList: SuggestItem[];
    // onSelect?: (id: number) => void;
    className?: string;
    isHomeComponent?: boolean;
}

export const CategoryMenu: React.FC<CategoryMenuProps> = ({
    categoryList,
    suggestItemList,
    // onSelect,
    className,
    isHomeComponent = true,
}: CategoryMenuProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // 루트 섹션 참조 (패널 위치 계산용)
    const sectionRef = useRef<HTMLElement>(null);
    // 어떤 카테고리가 활성(호버/포커스)인지
    const [activeIdx, setActiveIdx] = useState<number | null>(null);
    // 디테일 패널의 화면 위치(left)와 가로폭(width)
    const [pannelRect, setPannelRect] = useState<{ left: number; width: number } | null>(null);
    // 컨테이너/아이템 참조 (패널 위치 계산용)
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
    // 호버 이탈 지연 닫기 방지용 타이머
    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    // 활성 인덱스가 바뀔 때 패널 위치 측정
    useLayoutEffect(() => {
        if (activeIdx == null) return
        const container = containerRef.current
        const itemEl = itemRefs.current[activeIdx]
        if (!container || !itemEl) return;
        // const section = sectionRef.current
        // if (!container || !section) return;
        const c = container.getBoundingClientRect();
        const r = itemEl.getBoundingClientRect();
        setPannelRect({ left: r.left - c.left, width: r.width });
        // const s = section.getBoundingClientRect();
        // setPannelRect({ left: c.left - s.left, width: c.width })
    }, [activeIdx])
    // 닫기 타이머 관리
    const requestClose = (delay = 120) => {
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setActiveIdx(null), delay);
    };
    const cancelClose = () => {
        if (hideTimer.current) clearTimeout(hideTimer.current);
    };
    const handleEnter = (idx: number) => {
        cancelClose();
        setActiveIdx(idx);
    }

    let itemContent;
    if (isHomeComponent) {
        itemContent = (
            <div className="mt-6 flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-slate-800">
                <h3 className="mb-2 text-lg font-semibold">Recommended</h3>

                <div className="mt-6 grid w-full grid-cols-3 gap-6 rounded-3xl bg-amber-200 p-8">
                    {suggestItemList.map((item) => (
                        <article
                            key={item.id}
                            className="group flex h-full flex-col items-center overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg p-6"
                        >
                            <img
                                src={item.itemImg}
                                alt={item.title}
                                className="block h-[360px] w-[360px] object-cover"
                                draggable={false}
                            />
                            <h4 className="text-sm font-semibold text-slate-900">
                                {item.title}
                            </h4>
                            <h5 className="text-sm text-slate-900">
                                {item.subTitle}
                            </h5>
                            <h5 className="text-sm text-slate-900">
                                {item.prc}
                            </h5>

                        </article>
                    ))}
                </div>
            </div>
        )
    } else {
        itemContent = (
            <h3 className="mb-2 text-lg font-semibold">Category Item</h3>
        )
    }

    const updateCategory = (categoryId: number, subId?: number) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set('id', categoryId.toString());
        router.push(`category?${params.toString()}`);

        // if (categoryId) {
        //     params.set('id', categoryId.toString());
        //     router.push(`category?${params.toString()}`);
        // }
        // else params.delete('id');
    };

    return (
        <section ref={sectionRef} className={`relative ${className}`}>
            {/* 카테고리 바 */}
            <div
                ref={containerRef}
                className="flex items-center justify-between gap-4 rounded-2xl border-slate-200 bg-white/70 px-4 py-3 backdrop-blur"
                onMouseLeave={() => requestClose()}
            >
                {categoryList.map((value, index) => (
                    <button
                        key={value.id}
                        ref={(el) => { itemRefs.current[index] = el; }}
                        type="button"
                        onMouseEnter={() => handleEnter(index)}
                        onFocus={() => handleEnter(index)}
                        onClick={() => {
                            console.log("click:", value.id);
                            updateCategory(value.id);
                        }}
                        aria-expanded={activeIdx === index}
                        className={[
                            "flex-1 select-none rounded-xl px-4 py-2 text-sm font-medium",
                            "transition-colors duration-200",
                            activeIdx === index ? "bg-slate-900 text-white" : "bg-transparent text-slate-700 hover:bg-slate-100"
                        ].join(" ")}
                    >
                        {value.label}
                    </button>
                ))}
            </div>

            {/* 추천 상품 섹션 */}
            {itemContent}

            {/* 카테고리 디테일 패널 */}
            {activeIdx != null && pannelRect && (
                <div
                    onMouseEnter={cancelClose}
                    onMouseLeave={() => requestClose()}
                    className={[
                        "pointer-events-auto absolute z-20",
                        "w-full top-[52px]",
                        "origin-top rounded-xl border border-slate-200 bg-white p-4 shadow-xl",
                        "transition-all duration-150 ease-out",
                        activeIdx != null ? "opacity-100 scale-100" : "opacity-0 scale-95",
                    ].join(" ")}
                    // style={{ left: pannelRect.left, width: pannelRect.width }}
                    role="dialog"
                    aria-label={`${categoryList[activeIdx].label} details`}
                >
                    <div className="mt-6 grid w-full grid-cols-3 gap-6 rounded-3xl bg-white/10 p-8">
                        {categoryList[activeIdx].detail.map((item) => (

                            <button
                                key={item.id}
                                type="button"
                                onClick={() => {
                                    console.log("click:", item.label);
                                    updateCategory(categoryList[activeIdx].id, item.id);
                                }}
                                className={"flex-1 select-none rounded-xl px-4 py-2 text-sm font-medium"}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>


                </div>
            )}
        </section>
    )
}