import type { Config } from 'tailwindcss'

export default {
  darkMode: 'selector', // Enables .dark class on html/body
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
} satisfies Config
