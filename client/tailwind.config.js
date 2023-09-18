/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tagA-blue": "#1677ff",
      },
    },
  },
  plugins: [],
};
