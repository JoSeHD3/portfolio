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
import { useLocation } from 'react-router-dom';

const HomePage = () => {
    const location = useLocation();
    const scrollTarget = location.state?.scrollTo;

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
                <div className='text-[#0DAD8D] font-medium px-4 py-6 container mx-auto text-3xl relative mb-10 mt-20'>
                    <span>Experience
                    <LightBeam
                        className="absolute left-52 -translate-x-1/2"
                        width="240px"
                        height={8}
                        angle={0}
                        blur={8}
                        opacity={0.98}
                        style={{ transform: 'translateX(-50%)' }}
                    />
                    </span>
                </div>
                <Experience />
                <Band label={'bandProjects'} flip={true} />
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
