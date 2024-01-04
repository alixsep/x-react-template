import { type ReactNode, type FC, useLayoutEffect } from 'react'
import { useAppSelector } from '@redux/app/hooks'
import { selectTheme } from '@redux/features/theme/themeSlice.ts'

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
  const theme = useAppSelector(selectTheme)

  useLayoutEffect(() => {
    document.body.setAttribute('data-theme', theme)
    console.log(`Applied ${theme} theme.`)
  }, [theme])

  return children
}

export default ThemeProvider
