import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://gnansai.github.io',
    redirects: {
        '/work': '/',
        '/threeDProjects': '/',
        '/threeDProjects/[...slug]': '/work/[...slug]',
        '/webGLProjects': '/',
    },
});
