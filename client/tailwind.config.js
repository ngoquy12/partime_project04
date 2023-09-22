/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tagA-blue": "#1677ff",
      },
      backgroundColor: {
        "rgba-05": "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
