import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#0a192f',
        'navy-light': '#112240',
        'navy-lighter': '#1a365d',
        'light-gray': '#f8fafc',
        'medium-gray': '#64748b',
        'electric-blue': '#00aeff',
        'electric-blue-dark': '#0066cc',
        'accent-orange': '#ff6b35',
        'success-green': '#10b981',
        'warning-yellow': '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 174, 255, 0.3)',
        'glow-lg': '0 0 30px rgba(0, 174, 255, 0.4)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0a192f 0%, #112240 50%, #1a365d 100%)',
      },
    },
  },
  plugins: [],
}
export default config
