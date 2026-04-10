import { LightBeam } from "..";
import { useTranslation } from "react-i18next";

const BandNew = ({name}: {name: string}) => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto mt-20 mb-10 flex justify-center px-4">
            <div className="relative text-3xl font-medium text-[#0DAD8D]">
                <span>{t(name)}</span>
                <LightBeam
                    className="absolute left-1/2 top-full -translate-x-1/2"
                    width="240px"
                    height={8}
                    angle={0}
                    blur={8}
                    opacity={0.98}
                />
            </div>
        </div>
    );
}

export { BandNew };