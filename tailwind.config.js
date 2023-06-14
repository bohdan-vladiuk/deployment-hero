/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },

    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        outfit: ["var(--font-outfit)"],
      },
      boxShadow: {
        custom: "5px 5px 20px 1px rgba(115, 115, 115, 0.05)",
      },
    },
  },
  plugins: [require("./plugins/openVariant")],
};
