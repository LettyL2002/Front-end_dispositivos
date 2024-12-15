/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        cream: {
          50: "#FAF5F0",
          100: "#F5EDE3",
        },
        pink: {
          500: "#DB5F8D",
          600: "#C54777",
          800: "#9C3F61",
          900: "#7A3250",
        },
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
