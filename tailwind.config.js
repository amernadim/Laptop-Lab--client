/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#6ECCAF",
        
"secondary": "#497174",
        
"accent": "#344D67",

"neutral": "#171424",
        
"base-100": "#D6E4E5",

        
"info": "#3F85CF",
        
"success": "#155B53",
        
"warning": "#F3C74F",
        
"error": "#E14023",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
