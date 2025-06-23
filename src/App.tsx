import { ThemeProvider } from '@mui/material/styles';
import {
    Band,
    NavbarBar,
    theme,
    Header,
    Experience,
    Contact,
    Technology,
} from './components';
import { Projects } from './components';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <NavbarBar />
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
        </ThemeProvider>
    );
}

export default App;
