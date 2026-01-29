'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from '../../../public/next.svg'
import { useRouter } from "next/navigation";


export const TopBar: React.FC = () => {
    const router = useRouter();
    const [isAtTop, setIsAtTop] = useState<boolean>(true);

    useEffect(() => {
        const target = document.getElementById("topbar-sentinel");
        if (!target) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsAtTop(entry.isIntersecting);
            }, {
            threshold: 0,
        }
        );
        observer.observe(target);

        return () => observer.disconnect();

    }, []);

    return (
        <header className={[
            "fixed left-0 top-0 z-50 w-full transition-colors duration-300",
            isAtTop ? "bg-transparent" : "bg-white",
        ].join(" ")}>
            <div className="flex flex-col w-full">
                <div className="flex flex-row w-full">
                    <button
                        type="button"
                        onClick={() => {
                            console.log("click logo");
                            router.push('/')
                        }}
                        className="inline-flex items-center justify-center p-0 border-none bg-transparent"
                    >
                        <Image
                            src={logo}
                            alt=""
                            width={90}
                            height={180}
                        />

                    </button>

                    <h1 className="text-4xl font-semibold text-white">
                        TopBar Title
                    </h1>
                </div>

                <div className="w-full border-t-[1px] border-white/30" />

            </div>
        </header>
    )
}
