'use client';

import { useEffect, useRef, useState } from "react";

type FadeInSectionProps = {
    children: React.ReactNode;
    className?: string;
};

export function FadeInSection({ children, className = "" }: FadeInSectionProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        }, {
            threshold: [0.3],
            root: null,
            rootMargin: '0px'
        });

        observer.observe(element);
        return () => {
            observer.disconnect();
        };

    }, []);


    const hiddenClass = "opacity-0 translate-y-45";
    const visibleClass = "transition-all duration-1000 ease-out transform opacity-100 translate-y-0";

    return (
        <div ref={ref} >
            <div
                className={`${isVisible ? visibleClass : hiddenClass} ${className}`}>
                {children}
            </div>
        </div>
    );
}