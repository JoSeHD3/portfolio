import {
    Band,
    Contact,
    Experience,
    Header,
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
                <Band label={'bandExperience'} flip={false} />
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
