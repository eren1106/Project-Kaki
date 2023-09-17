import type { Config } from 'tailwindcss'

const commonColors = {
  'blue-1': '#DBE2EF',
  'blue-2': '#3F72AF',
  'blue-3': '#112D4E'
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      color: {
        ...commonColors,
      },
      backgroundColor: {
        ...commonColors,
        'body': '#F9F7F7',
      },
      borderColor: {
        ...commonColors,
      },
    },
  },
  plugins: [],
}
export default config
