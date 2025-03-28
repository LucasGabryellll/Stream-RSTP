import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-home': "url('/bg-home.svg')"
      },
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        error: '#FF0000',
        background: '#1B1827',
        card: '#2A2837',
        'card-focus-to': '#454255',
        'card-focus-from': '#2D2B3C',
        'color-primary-gradient': 'rgba(51, 134, 142, 1)',
        'color-secundary-gradient': 'rgba(0, 166, 182, 1)',
        'text-primary': '#F1F1F1',
        'text-secondary':'#ECECEC',
        'text-muted': '#787586',
        'color-primary': '#2A2837',
        border: '#8D8D8D'
      }
    },
    
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1536px'
    },
    
  },
  plugins: [],
}
export default config
