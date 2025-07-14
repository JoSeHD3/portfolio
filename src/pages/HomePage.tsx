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
                <Band label={'Experience'} flip={false} />
                <Experience />
                <Band label={'Projects'} flip={true} />
                <Projects />
                <Band label={'Technologies'} flip={false} />
                <Technology />
                <Band label={'Contact'} flip={true} />
                <Contact />
            </main>
        </>
    );
};

export { HomePage };
