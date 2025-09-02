import type { Config } from 'tailwindcss'
import remToPx from 'tailwindcss-rem-to-px'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', '../blocks/**/*.liquid', '../snippets/**/*.liquid'],
  prefix: 'tw-',
  theme: {
    extend: {}
  },
  plugins: [remToPx({ baseFontSize: 16 })]
}

export default config
