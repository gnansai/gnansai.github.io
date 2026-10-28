import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://gnansai.github.io',
    redirects: {
        '/work': '/',
        '/threeDProjects': '/',
        '/threeDProjects/[...slug]': '/work/[...slug]',
        '/webGLProjects': '/',
        '/work/illusion-a-almighty': '/work/illusion-alphabets',
        '/work/illusion-b-building': '/work/illusion-alphabets',
        '/work/illusion-c-cold-closet': '/work/illusion-alphabets',
    },
});
