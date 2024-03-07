import type { Config } from 'tailwindcss';

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
      backgroundColor: {},
      colors: {
        default: 'var(--tex-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        green: 'var(--link-2-color)',
        block: 'var(--bg-color)',
        orange: {
          100: 'var(--primary-color)',
        },
        graphite: {
          100: 'var(--primary-color)',
          800: 'var(--graphite-1-color)',
          900: 'var(--graphite-color)',
        },
      },
      fontSize: {
        '0': '0',
      },
      lineHeight: {
        '0': '0',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
