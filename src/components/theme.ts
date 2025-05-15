import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
    augmentColor({ color: { main: mainColor } });
const paletteTheme = createTheme({
    palette: {
        basic: createColor('#0DAD8D'),
    },
});

const buttonTheme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'border' },
                    style: {
                        backgroundColor: '#262626',
                        color: '#0DAD8D',
                        padding: '12px 24px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        border: '2px solid #0DAD8D',
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#262C2B',
                            borderColor: '#0DAD8D',
                        },
                    },
                },
            ],
        },
    },
});

const theme = createTheme(deepmerge(paletteTheme, buttonTheme));

export { theme };
