import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:5000', // Прокси на backend
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
        headers: {
            'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' http://localhost:5000;",
        },
    },
});