import {
    Band,
    Contact,
    Experience,
    Header,
    Projects,
    Technology,
} from '@components';

const HomePage = () => {
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
