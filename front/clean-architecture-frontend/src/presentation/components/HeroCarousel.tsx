"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Slide = { src: string; alt?: string };
type Overlay = { title?: string; logoSrc?: string; subtitle?: string };

type HeroCarouselProps = {
    slides: Slide[];
    autoPlayMS?: number;
    className?: string;
    overlay?: Overlay;
};

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
    slides,
    autoPlayMS = 4000,
    className = "",
    overlay,
}) => {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const length = useMemo(() => slides.length, [slides.length]);
    const trackRef = useRef<HTMLDivElement>(null);

    const go = (to: number) => setIndex((prev) => (to + length) % length);
    const next = () => go(index + 1);
    const prev = () => go(index - 1);

    useEffect(() => {
        if (paused || length <= 1) return;
        const id = setInterval(next, autoPlayMS);
        return () => clearInterval(id);
    }, [index, paused, autoPlayMS, length]);

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
    };

    return (
        <section
            className={`relative select-none overflow-hidden ${className}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onKeyDown={onKeyDown}
            tabIndex={0}
            aria-roledescription="carousel"
            aria-label="Promotional banners"
        >
            {/* 슬라이드 트랙 */}
            <div
                ref={trackRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {slides.map((value, index) => (
                    <div key={index} className="relative min-w-full">
                        {/* 이미지: Next.js면 next/image로 바꿔도 괜찮다 */}
                        <img
                            src={value.src}
                            alt={value.alt ?? `slide-${index + 1}`}
                            className="block h-[360px] w-full object-cover md:h-[480px]"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>

            {/* 오버레이(배너 위 로고/타이틀) */}
            {overlay && (
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-start pt-6">
                    {overlay.logoSrc && (
                        <img
                            src={overlay.logoSrc}
                            alt="=Company logo"
                            className="pointer-events-auto h-10 w-auto md:h-12"
                        />
                    )}
                    {overlay.title && (
                        <h1 className="mt-2 rounded-xl bg-black/40 px-3 py-1 text-center text-sm font-semibold text-white backdrop-blur md:text-lg">
                            {overlay.title}
                        </h1>
                    )}
                    {overlay.subtitle && (
                        <p className="mt-1 rounded-xl bg-black/30 px-2 py-0.5 text-xs text-white backdrop-blur md:text-sm">
                            {overlay.subtitle}
                        </p>
                    )}

                </div>
            )}

            {/* 좌/우 화살표 */}
            <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60"
            >

            </button>

            <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60">

            </button>

            {/* 인디케이터 */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => go(i)}
                        className={`h-2 w-2 rounded-full transition${i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"}`}
                    />
                ))}

            </div>

        </section>
    )
}