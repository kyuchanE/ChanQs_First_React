
export const Footer: React.FC = () => {

    return (
        <section
            className="relative bg-slate-200 mt-23">

            <div
                className="flex px-15 py-10 justify-center gap-15">
                {/* Title */}
                <h4 className="text-sm font-semibold text-slate-900 mt-5">
                    Test Title
                </h4>
                {/* Info */}
                <div
                    className="flex flex-col gap-3">
                    <h4 className="text-sm font-semibold text-slate-900">
                        이용약관 | 개인정보처리방침
                    </h4>
                    <h4 className="text-sm font-semibold text-slate-900">
                        Test Address Test Address Test Address Test Address
                    </h4>
                    <h4 className="text-sm font-semibold text-slate-900">
                        Test Name Test Info Test Name Test Info Test Name Test Info
                    </h4>
                    <h4 className="text-sm font-semibold text-slate-900">
                        Test Name Test Info Test Name Test Info Test Name Test Info
                    </h4>
                    <h4 className="text-sm font-semibold text-slate-900">
                        Test Name Test Info Test Name Test Info Test Name Test Info
                    </h4>
                </div>
            </div>

        </section>
    )
}