/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-color": "#E07B67",
        "dark-10": "#121214",
        "dark-20": "#17171A",
        "dark-30": "#202024",
        "dark-40": "#252529",
        "dark-50": "#AFABB6",
        "dark-60": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
