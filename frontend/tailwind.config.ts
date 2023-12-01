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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        error: '#FF0000',
        'color-primary-gradient': 'rgba(51, 134, 142, 1)',
        'color-secundary-gradient': 'rgba(0, 166, 182, 1)',
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
