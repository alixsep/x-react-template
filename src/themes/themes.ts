import type { ThemeValueType } from '@redux/features/theme/themeSlice'

import light from './light.json'
import dark from './dark.json'

export type ThemeType = {
  [key in ThemeValueType]: {
    '--color-text': string
    '--color-text-secondary': string
    '--color-background-lightest': string
    '--color-background-lighter': string
    '--color-background': string
    '--color-background-darker': string
    '--color-background-darkest': string
    '--color-primary-lighter': string
    '--color-primary': string
    '--color-primary-darker': string
  }
}

const themes: ThemeType = {
  light: light,
  dark: dark,
}

export default themes
