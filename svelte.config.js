import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	preprocess: [
		preprocess({
			scss: {
				// prependData: '@use "src/variables.scss" as *;'
				// prependData: '@use "src/index.scss" as *;'
				prependData: '@use "src/variables.scss" as *; @use "src/_breakpoints.scss" as *;'
			}
		})
	]
};

export default config;
