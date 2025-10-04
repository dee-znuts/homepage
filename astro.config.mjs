// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import lenis from 'astro-lenis';

// https://astro.build/config
export default defineConfig({
	site: 'https://dee-znuts.live',
	output: 'static',
	experimental: {
		fonts: [
			{
				provider: fontProviders.fontsource(),
				name: 'DM Serif Display',
				cssVariable: '--font-dm-serif-display',
				display: 'swap',
				fallbacks: ['Times New Roman'],
				styles: ['normal', 'italic'],
			},
			{
				provider: fontProviders.fontsource(),
				name: 'DM Sans',
				cssVariable: '--font-dm-sans',
				display: 'swap',
				weights: [200, 400, 700],
				fallbacks: ['sans-serif'],
				styles: ['normal'],
			},
		],
	},
	integrations: [lenis()],
});
