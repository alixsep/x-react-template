import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { saveToLocalStorage, loadFromLocalStorage } from '@utils'

export type ThemeValueType = 'dark' | 'light'
export type ThemeStateType = { value: ThemeValueType }

const initialValue = 'dark'

const initialState: ThemeStateType = { value: initialValue }

export const themeSlice = createSlice({
  name: 'theme',
  initialState: () => loadFromLocalStorage('themeState', initialState),
  reducers: {
    reset: (state) => {
      state.value = initialValue
      saveToLocalStorage('themeState', initialState)
    },
    setTheme: (state, action: PayloadAction<ThemeValueType>) => {
      state.value = action.payload
      saveToLocalStorage('themeState', { value: action.payload })
    },
  },
})

export const { reset, setTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme.value

export default themeSlice.reducer
