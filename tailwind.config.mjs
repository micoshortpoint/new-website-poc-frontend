/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  screens: {
		sm: "480px",
		md: "768px",
		lg: "992px",
		xl: "1440px",
		"2xl": "1920px",
	  },
	  fontFamily: {
		display: ["Euclid", "system-ui", "sans-serif"],
		body: ["Euclid", "system-ui", "sans-serif"],
	  },
	  colors: {
		primary: {
		  100: "#deefff",
		  200: "#f2faff",
		  400: "#3161d1",
		  800: "#112576",
		},
		secondary: {},
		neutral: {
		  50: "#ffffff",
		  800: "#181a2a",
		},
	  },
	  fontSize: {
		sm: "0.8rem",
		base: "1rem",
		xl: "1.25rem",
		"2xl": "1.563rem",
		"3xl": "1.953rem",
		"4xl": "2.441rem",
		"5xl": "3.052rem",
	  },
	},
	plugins: [],
  };
  