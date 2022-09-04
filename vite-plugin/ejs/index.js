import { render, } from 'ejs';
import { getCdn, } from '../../cdn.js';


export default function viteEjsPlugin() {
    let config;
    return {
        name: 'ejs-transform-html',
        enforce: 'pre',
        configResolved(resolvedConfig) {
            config = resolvedConfig;
        },
        transformIndexHtml: {
            enforce: 'pre',
            transform(html) {
                const openSource = config.env.VITE_OPEN_SOURCE;
                const isOpen = openSource === 'true' || openSource === true;
                const isProd = config.mode === 'production';

                const data = {
                    isOpen,
                    isProd,
                    ...getCdn(isProd),
                };

                return render(html, data);
            },
        },
    };
}