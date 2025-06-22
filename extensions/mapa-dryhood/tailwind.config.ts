import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', '../blocks/**/*.liquid', '../snippets/**/*.liquid'],
  prefix: 'tw-',
  theme: {
    extend: {}
  },
  plugins: []
}

export default config
