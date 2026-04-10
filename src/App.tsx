import { ThemeProvider } from '@mui/material/styles';
import { LightWavesBackground, NavbarBar, theme } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './i18n';
import './i18nSync';
import { HomePage } from './pages';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router basename='/portfolio'>
                <div className="relative isolate min-h-[100dvh] overflow-x-hidden bg-[#020814]">
                    <LightWavesBackground className="-z-10" />
                    <div className="relative z-10">
                        <NavbarBar />

                        <Routes>
                            <Route path="/" element={<HomePage />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
