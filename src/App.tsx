import { ThemeProvider } from '@mui/material/styles';
import { Band, Navbar, theme } from './components';
import Button from '@mui/material/Button';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar />
                <section>
                    <span className="bold text-2xl">Testowy tekst</span>
                </section>
                <main>
                    <Band label={'Experience'} flip={false} />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam scelerisque, mauris egestas bibendum gravida, nunc
                    tellus laoreet arcu, eu eleifend justo urna eget sapien.
                    Curabitur a hendrerit metus, non cursus augue. Nunc
                    condimentum lorem libero, non lacinia erat placerat
                    eleifend. In et lorem a nunc molestie ornare. Nam et
                    molestie lacus. Curabitur vel arcu sed nunc imperdiet
                    scelerisque. Integer cursus sem dui, non suscipit neque
                    porta non. Quisque diam orci, convallis sed hendrerit quis,
                    tempus ut odio. Fusce viverra finibus malesuada. Proin eget
                    sapien purus. Fusce viverra ligula at pharetra blandit.
                    Vestibulum luctus facilisis lorem. Donec bibendum iaculis
                    nisi facilisis porttitor. Praesent vestibulum eu dolor sed
                    tincidunt. Nullam tempus lacus in odio elementum lacinia.
                    Nullam sed congue ex, sed venenatis mauris. Aliquam a mauris
                    nec nunc pellentesque lobortis sed eget erat. Pellentesque
                    nec nisl sodales, pretium augue eu, venenatis odio. Sed
                    fringilla urna vel sollicitudin molestie. Phasellus vitae
                    malesuada purus, in rhoncus arcu. Nunc ligula diam, dictum
                    quis semper in, pharetra iaculis lorem. Nullam cursus ex ut
                    dolor auctor suscipit. Cras iaculis ligula sit amet mi
                    feugiat faucibus. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Aenean viverra varius
                    nisl, in pretium sapien condimentum sit amet. Donec at
                    fringilla nibh. Donec nisl metus, maximus eget orci eu,
                    ullamcorper tempus ipsum. Vivamus pretium ultrices diam, vel
                    dapibus erat suscipit in. Donec vel turpis convallis,
                    rhoncus augue a, lobortis ligula. Vestibulum ut lacus
                    tempus, imperdiet elit eu, fermentum neque. Nunc quis neque
                    magna. Suspendisse potenti. Fusce porta rutrum lorem nec
                    molestie. Nulla blandit, quam eget auctor varius, eros
                    ligula semper augue, non feugiat sem lectus a metus.
                    Maecenas vel purus in ante dictum sollicitudin in sed urna.
                    Integer vulputate sem at sollicitudin egestas. Integer
                    facilisis velit risus, eget auctor lectus posuere sed. Fusce
                    tincidunt consequat quam nec tincidunt. Aliquam euismod sed
                    nunc at aliquet. Nam eros nisi, fermentum vel sem at,
                    ullamcorper pharetra metus. Pellentesque accumsan purus
                    lorem, in tempor ex blandit fermentum. Phasellus viverra vel
                    lacus sed vestibulum. Nulla eros magna, sollicitudin vel
                    maximus eu, volutpat at justo. Fusce cursus mauris ac dictum
                    malesuada. Maecenas et felis egestas, viverra orci at,
                    vestibulum purus. Aenean iaculis vel arcu in accumsan.
                    <Band label={'Experience'} flip={true} />
                    <Button variant="border" className="w-36">
                        Test
                    </Button>
                </main>
            </ThemeProvider>
        </>
    );
}

export default App;
