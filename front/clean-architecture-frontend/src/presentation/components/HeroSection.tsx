"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type HeroSectionProps = {
    className?: string;
};

const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

export const HeroSection: React.FC<HeroSectionProps> = ({
    className = "",
}) => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const movingBoxRef = useRef<HTMLDivElement | null>(null);
    const rightScrollRef = useRef<HTMLDivElement | null>(null);

    const [isActive, setIsActive] = useState(false);
    const [progress, setProgress] = useState(0);

    const leftDistance = 160;
    const rightDistance = useMemo(() => {
        const el = rightScrollRef.current;
        if (!el) {
            return 0;
        }
        return el.scrollHeight - el.clientHeight;
    }, [isActive]);

    const totalDistance = leftDistance + rightDistance;

    useEffect(() => {
        if (!sectionRef.current) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => setIsActive(entry.isIntersecting),
            { root: null, threshold: 0.6 }
        );

        observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isActive || totalDistance <= 0) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        const onWheel = (event: WheelEvent) => {
            if (!isActive) {
                return;
            }

            if (progress >= totalDistance) {
                document.body.style.overflow = "";
                return;
            }

            event.preventDefault();
            setProgress((prev) => clamp(prev + event.deltaY, 0, totalDistance));
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        return () => window.removeEventListener("wheel", onWheel);
    }, [isActive, totalDistance, progress]);

    useEffect(() => {
        const leftProgress = clamp(progress / leftDistance, 0, 1);
        const rightProgress = rightDistance > 0
            ? clamp((progress - leftDistance) / rightDistance, 0, 1)
            : 0;

        if (movingBoxRef.current) {
            const y = -leftDistance + leftDistance * leftProgress;
            movingBoxRef.current.style.transform = `translate(-1.5rem, ${y}px)`;
        }

        if (rightScrollRef.current) {
            rightScrollRef.current.scrollTop = rightDistance * rightProgress;
        }
    }, [progress, leftDistance, rightDistance]);

    return (
        <section ref={sectionRef} className={["flex flex-row", className].join(" ")}>
            {/* Left Div */}
            <div className="relative w-1/2 bg-slate-900 overflow-hidden">
                {/* A: 중앙 고정*/}
                <div className="absolute inset-0 grid place-items-center">
                    <div className="w-[360px] h-[360px] bg-black shadow" />
                </div>
                {/* B: 움직이는 Div*/}
                <div className="absolute inset-0 grid place-items-center">
                    <div
                        ref={movingBoxRef}
                        className="rounded-xl w-[360px] h-[360px] bg-slate-600 shadow"
                        style={{ transform: "translate(-1.5rem, -160px)" }}
                    />
                </div>
            </div>
            {/* Right Div */}
            <div ref={rightScrollRef} className="w-1/2 h-full overflow-hidden bg-white">
                <div className="min-h-[140vh] flex flex-col items-center justify-center">
                    <h1 className="h-full text-4xl font-semibold text-slate-900">
                        Hero Section!!! - 0
                    </h1>

                    <h1 className="h-full text-4xl font-semibold text-slate-900">
                        Hero Section!!! - 1
                    </h1>

                    <h1 className="h-full text-4xl font-semibold text-slate-900">
                        Hero Section!!! - 2
                    </h1>
                </div>
            </div>
        </section>
    );
};
