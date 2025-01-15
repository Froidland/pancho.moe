import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#dbdbdc',
				secondary: '#9b9c9d',
			},
		},
	},

	plugins: [typography],
} satisfies Config;
