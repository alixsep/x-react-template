import { type ReactNode, type FC, useEffect } from 'react'
import { useAppSelector } from '@redux/app/hooks'
import {
  selectTheme,
  type ThemeValueType,
} from '@redux/features/theme/themeSlice.ts'
import themes from './themes'

type ThemeProviderType = {
  children: ReactNode
}

/**
 * React component for providing theme functionality to its children.
 *
 * @example
 * // Usage within a React application
 * <ThemeProvider>
 *   Your themed component here...
 * </ThemeProvider>
 *
 * @param props.children - The child components that will inherit the theme.
 * @returns The rendered `ThemeProvider` component.
 */
const ThemeProvider: FC<ThemeProviderType> = ({ children }) => {
  const theme: ThemeValueType = useAppSelector(selectTheme)

  useEffect(() => {
    const chosenTheme = themes[theme]
    for (const key in chosenTheme) {
      document.documentElement.style.setProperty(
        key,
        chosenTheme[key as keyof typeof chosenTheme],
      )
    }
  }, [theme])

  return children
}

export default ThemeProvider
