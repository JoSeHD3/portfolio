import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar } from './components';

declare module '@mui/material/styles' {
    interface Palette {
        basic: Palette['primary'];
    }

    interface PaletteOptions {
        basic?: PaletteOptions['primary'];
    }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
    augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        basic: createColor('#0DAD8D'),
    },
});

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar />
                <section>
                    <span className="bold text-2xl">Testowy tekst</span>
                </section>
            </ThemeProvider>
        </>
    );
}

export default App;
