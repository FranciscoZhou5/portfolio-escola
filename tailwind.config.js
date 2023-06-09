/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--inter-font)"],
      },

      textColor: {
        normal: "#191919",
        weak: "#757575",
      },

      backgroundColor: {
        primary: "#EEE",
        secundary: "#e6e6e6",
      },
    },
  },
  plugins: [],
};
