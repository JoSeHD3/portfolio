import {
    Band,
    Contact,
    Experience,
    Header,
    LightBeam,
    Projects,
    Technology,
} from '@components';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
    const location = useLocation();
    const scrollTarget = location.state?.scrollTo;

    const { t } = useTranslation();
    useEffect(() => {
        if (scrollTarget) {
            const el = document.getElementById(scrollTarget);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [scrollTarget]);

    return (
        <>
            <Header />
            <main>
                <div className="container mx-auto mt-20 mb-10 flex justify-center px-4">
                    <div className="relative text-3xl font-medium text-[#0DAD8D]">
                        <span>{t('bandExperience')}</span>
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
                <Experience />
                <div className="container mx-auto mt-20 mb-10 flex justify-center px-4">
                    <div className="relative text-3xl font-medium text-[#0DAD8D]">
                        <span>{t('bandProjects')}</span>
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
                <Projects />
                <Band label={'bandTechnologies'} flip={false} />
                <Technology />
                <Band label={'bandContact'} flip={true} />
                <Contact />
            </main>
        </>
    );
};

export { HomePage };
