import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    esbuild: {
        loader: 'tsx',
        include: /\.tsx?$/,
    },
    server: {
        proxy:
            {

            "/api":
                {
                    target: "https://67cd610add7651e464ee3464.mockapi.io",
                        changeOrigin
                :
                    true,
                        rewrite
                :
                    (path) => path.replace(/^\/api/, ""),
                },
                "pictures": {
                    target: "https://i.ibb.co",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/pictures/, ""),
            },
        },
    },
});