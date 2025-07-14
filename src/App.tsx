import { ThemeProvider } from '@mui/material/styles';
import { NavbarBar, theme } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './i18n';
import './i18nSync';
import { HomePage, ProjectPage } from './pages';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <NavbarBar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/projects/:projectName"
                        element={<ProjectPage />}
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
