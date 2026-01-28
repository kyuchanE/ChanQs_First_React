type HeroSectionProps = {
    className?: string;
}
export const HeroSection: React.FC<HeroSectionProps> = ({
    className = "",
}) => {
    return (
        <section className={['flex', className].join(" ")}>
            <div className="flex flex-col min-w-screen items-center justify-center">
                <h1 className="text-4xl font-semibold text-white">
                    Hero Section!!!
                </h1>
            </div>

        </section>
    )
}