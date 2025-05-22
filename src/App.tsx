import { ThemeProvider } from '@mui/material/styles';
import { Band, Navbar, theme, Header, Experience, Contact } from './components';
import { Projects } from './components';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Header />
            <main>
                <Band label={'Experience'} flip={false} />
                <Experience />
                <Band label={'Projects'} flip={true} />
                <Projects />
                <Band label={'Contact'} flip={false} />
                <Contact />
            </main>
        </ThemeProvider>
    );
}

export default App;
