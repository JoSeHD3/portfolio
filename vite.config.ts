import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@lib': path.resolve(__dirname, 'src/lib.ts'),
            '@store': path.resolve(__dirname, 'src/store.ts'),
            '@components': path.resolve(__dirname, 'src/components'),
        },
    },
});
