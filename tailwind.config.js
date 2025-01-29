/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		`./src/pages/**/*.{js,jsx,ts,tsx}`,
		`./src/components/**/*.{js,jsx,ts,tsx}`,
	],
	theme: {
		extend: {
			colors: {
				darkslate: {
					50: '#3D3D3D',
					100: '#2C2C2C',
					200: '#262626',
					300: '#202020',
					400: '#1A1A1A',
					500: '#171717',
					600: '#141414',
					700: '#111111',
					800: '#0E0E0E',
					900: '#0B0B0B',
				},
				primary: {
					100: '#fef9c3',
					200: '#fef08a',
					300: '#fde047',
					400: '#facc15',
					500: '#eab308',
					600: '#ca8a04',
					700: '#a16207',
					800: '#854d0e',
					900: '#713f12',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
