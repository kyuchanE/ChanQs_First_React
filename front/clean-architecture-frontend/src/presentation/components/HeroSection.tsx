type HeroSectionProps = {
    className?: string;
}
export const HeroSection: React.FC<HeroSectionProps> = ({
    className = "",
}) => {
    return (
        <section className={['flex flex-row', className].join(" ")}>
            {/* Left Div */}
            <div className="relative w-1/2 bg-slate-900">
                {/* A: 중앙 고정*/}
                <div className="absolute inset-0 grid place-items-center">
                    <div className="w-[360px] h-[360px] bg-black shadow">

                    </div>
                </div>
                {/* B: 움직이는 Div*/}
                <div className="absolute inset-0 grid place-items-center">
                    <div className="-translate-x-6 -translate-y-40 rounded-xl w-[360px] h-[360px] bg-slate-600 shadow">

                    </div>
                </div>
            </div>
            {/* Right Div */}
            <div className="flex flex-col w-1/2 bg-white items-center justify-center">
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

        </section>
    )
}