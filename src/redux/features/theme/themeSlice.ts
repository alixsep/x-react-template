import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export type ThemeValueType = 'dark' | 'light'
export type ThemeStateType = { value: ThemeValueType }

const initialValue = 'dark'

const initialState: ThemeStateType = { value: initialValue }

// Convert object to string and store in localStorage.
const saveThemeToLocalStorage = (state: ThemeStateType) => {
  try {
    const stringifiedState = JSON.stringify(state)
    localStorage.setItem('themeState', stringifiedState)
  } catch (e) {
    console.warn(e)
  }
}

// Load string from localStorage and convert into an Object.
// It should set the theme to dark if there is no theme saved.
const loadThemeFromLocalStorage = () => {
  try {
    const stringifiedState = localStorage.getItem('themeState')
    if (stringifiedState === null) {
      saveThemeToLocalStorage(initialState)
      return initialState
    }
    return JSON.parse(stringifiedState) as ThemeStateType
  } catch (e) {
    console.warn(e)
    saveThemeToLocalStorage(initialState)
    return initialState
  }
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: () => loadThemeFromLocalStorage(),
  reducers: {
    reset: (state) => {
      state.value = initialValue
      saveThemeToLocalStorage(initialState)
    },
    setTheme: (state, action: PayloadAction<ThemeValueType>) => {
      state.value = action.payload
      saveThemeToLocalStorage(state)
    },
  },
})

export const { reset, setTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme.value

export default themeSlice.reducer
