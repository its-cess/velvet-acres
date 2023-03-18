/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: '1.5rem'
		},
		colors: {
			'dark-green': '#2C3639',
			green: '#3F4E4F',
			tan: '#A27B5C',
			cream: '#DCD7C9'
		}
	},
	plugins: []
};
