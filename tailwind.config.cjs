/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			lato: ['Lato', 'sans-serif'],
			playfair: ['Playfair Display', 'serif']
		},
		extend: {
			backgroundImage: {
				'contactUs': 'url("images/equestrian-center.jpg")',
				'velvetAcres': 'url("images/backdrop.jpg")'
			},
			colors: {
				'dark-green': '#2C3639',
				'green': '#3F4E4F',
				'tan': '#A27B5C',
				'cream': '#DCD7C9'
			},
			listStyleImage: {
				horseshoe: 'url("images/horseshoe.png")'
			},
			zIndex: {
				mobileNav: 91,
				navBar: 90
			}
		},
	},
	plugins: []
};
