/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Satoshi: ["Satoshi", "sans-serif"],
      Wellfleet: ["Wellfleet", "sans-serif"],
    },
    colors: {
      "neutral-gray": "#E7E7E7",
      "neutral-gray-4": "#888",
      "light-gray": "#B0B0B0",
      "dark-gray": "#888",
      "dark-orange": "#DC4A2D",

      "orange-50": "#FEF4F2",
      "light-orange": "#FCB4A5",
      "light-green": "#ABEFC6",
      "pale-green": "#ECFDF3",
      "text-1": "#6E6D6D",
      "text-2": "#5D5D5D",
      "text-3": "#4F4F4F",
      "text-5": "#3D3D3D",
      green: "#067647",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
