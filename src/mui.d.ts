import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        basic: Palette['primary'];
    }
    interface PaletteOptions {
        basic?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        basic: true;
    }
}
