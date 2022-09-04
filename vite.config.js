import { defineConfig, } from 'vite';
const path = require('path');

// official plugin
import { createVuePlugin, } from 'vite-plugin-vue2';
import { viteExternalsPlugin, } from 'vite-plugin-externals';

// own plugin
import viteMarkdownPlugin from './vite-plugin/markdonw/index.js';
import viteEjsPlugin from './vite-plugin/ejs/index.js';

import { getExternals, } from './cdn.js';
const externals = getExternals();

export default defineConfig({
    base: './',
    plugins: [
        // 向下兼容 vue2
        viteMarkdownPlugin(),
        createVuePlugin({
            include: [/\.md$/, /\.vue$/],
            jsx: true,
        }),
        viteEjsPlugin(),
        viteExternalsPlugin(externals)
    ],
    resolve: {
        // 文件夹别名
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src'),
            },
            {
                find: '@img',
                replacement: path.resolve(__dirname, '/img'),
            }
        ],
    },
    css: {
        postcss: {
          plugins: [
              {
                postcssPlugin: 'internal:charset-removal',
                AtRule: {
                  charset: (atRule) => {
                    if (atRule.name === 'charset') {
                      atRule.remove();
                    }
                  },
                },
              }
          ],
        },
    },
    server: {
        port: 4000,
        strictPort: false,
        proxy: {
            '/api': {
                target: 'http://0.0.0.0:3000/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
});
