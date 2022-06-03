import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    alias: {
      $lib: path.resolve('./src/lib'),
      $i18n: path.resolve('./src/i18n'),
      $locales: path.resolve('./src/locales'),
      $style: path.resolve('./src/style')
    },

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    },
    

  }
};

export default config;
