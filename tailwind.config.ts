import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0F0F0F',
        'bg-secondary': '#1A1A1A',
        'bg-elevated': '#242424',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'text-ghost': '#666666',
        'mood-chill': '#6C5CE7',
        'mood-hype': '#FF6B6B',
        'mood-focus': '#00D2D3',
        'mood-messy': '#FFA502',
        'mood-sad': '#74B9FF',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Outfit', 'sans-serif'],
      },
      borderRadius: {
        'bubble': '20px',
        'card': '16px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-small': 'bounce-small 0.5s ease-in-out',
      },
      keyframes: {
        'bounce-small': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
