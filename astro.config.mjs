// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: "https://dee-znuts.live",
	output: "static",
	experimental: {
		fonts: [
			{
				provider: fontProviders.fontsource(),
				name: "DM Serif Display",
				cssVariable: "--font-dm-serif-display",
				display: "swap",
				fallbacks: ["Times New Roman"],
				styles: ["normal", "italic"]
			},
			{
				provider: fontProviders.fontsource(),
				name: "DM Sans Variable",
				cssVariable: "--font-dm-sans",
				display: "swap",
				weights: [200, 400],
				fallbacks: ["sans-serif"],
				styles: ["normal"]
			},
		]
	}
});
