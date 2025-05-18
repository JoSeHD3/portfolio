import { ThemeProvider } from '@mui/material/styles';
import { Band, Navbar, theme, Header, Experience } from './components';
import Button from '@mui/material/Button';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Header />
            <main>
                <Band label={'Experience'} flip={false} />
                <Experience />
                <Band label={'Experience'} flip={true} />
                <Button variant="border" className="w-36">
                    Test
                </Button>
            </main>
        </ThemeProvider>
    );
}

export default App;
