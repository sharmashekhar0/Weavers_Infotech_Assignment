/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				custom: ["Roboto", "sans"], // Replace 'MyCustomFont' with the actual font name
			},
			boxShadow: {
				customShadow:
					"rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset",
			},
		},
	},

	plugins: [],
};
