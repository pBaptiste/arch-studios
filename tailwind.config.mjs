/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'very-dark-blue' : '#1B1D23',
				'dark-grey' : '#60636D',
				'medium-grey' : '#7D828F',
				'light-grey' : '#C8CCD8',
				'very-light-grey' : '#EEEFF4',
				'red' : '#DF5656',
			},
			backgroundImage: {
				'card-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.01%, rgba(0, 0, 0, 0.50) 100%)",
			},
			gridTemplateColumns: {
				'about': ' repeat(auto-fill, minmax(150px, 1fr))',
			  }
		},
	},
	plugins: [],
}
