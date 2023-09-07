import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      }
    },
    extend: {
      colors: {
        "light-gray": "#F1F5F9",
        "gray": "#A3AEBA",
        "dark-gray": "#4B5563",
        "gradient-light-blue": "#4371F3",
        "gradient-dark-blue": "#2D57CC",
        "darker-gradient-light-blue": "#3853DF",
        "darker-gradient-dark-blue": "#1D319A",
        "darker-blue": "#030712",
        "dark-blue": "#040917",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
