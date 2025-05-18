import '@mui/material/Button';
import '@mui/material/styles';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        border: true;
    }
}

declare module '@mui/material/styles' {
    interface Palette {
        basic: Palette['basic'];
    }

    interface PaletteOptions {
        basic?: PaletteOptions['basic'];
    }
}
