import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'w-blue': '#2f6eb5',
        'w-green': '#76bc21',
        'w-orange': '#fc6261',
        'w-yellow': '#fdbd01',
        'w-bluelight':'#4cc4db'
      },
      fontFamily: {
        'bogleblack': ['BOGLEBLACK'],
        'boglebold': ['BOGLEBOLD'],
        'bogleitalic': ['BOGLEITALIC'],
        'bogleregular': ['BOGLEREGULAR'],
      },
  
      
    },
  },
  plugins: [
    // require('flowbite/plugin')
],
};
export default config;
