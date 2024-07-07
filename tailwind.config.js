/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				noise: "url('/noise.png')",
			},
			fontFamily: {
				SctoRegular: ['SctoRegular', 'sans-serif'],
				SctoMedium: ['SctoMedium', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
