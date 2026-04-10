import {
    BandNew,
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
                <BandNew name={'bandExperience'} />
                <Experience />
                <BandNew name={'bandProjects'} />
                <Projects />
                <BandNew name={'bandTechnologies'} />
                <Technology />
                <BandNew name={'bandContact'} />
                <Contact />
            </main>
        </>
    );
};

export { HomePage };
