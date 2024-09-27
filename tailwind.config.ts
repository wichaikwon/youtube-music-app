import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/contexts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '120': '30rem',
        '77' : '19.2rem'
      },
      fontSize: {
        xxs: '0.5rem',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
}
export default config
