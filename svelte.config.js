import adapter from '@sveltejs/adapter-auto'
import polyfills from 'rollup-plugin-polyfill-node'
import globals from 'rollup-plugin-node-globals'
import bakedEnv from 'rollup-plugin-baked-env'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
	adapter: adapter(),
	vite: {
	    plugins: [
		globals(),
		bakedEnv(),
		polyfills(),
	    ],
	    server: {
		fs: {
		    allow: ['..'],
		},
	    },
	},
    }
};

export default config;
