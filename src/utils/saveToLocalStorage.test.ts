import { describe, it, expect } from 'vitest'
import saveToLocalStorage from './saveToLocalStorage'

describe('saveToLocalStorage', () => {
  const key = 'testKey'

  it('save state to localStorage', () => {
    const state = { counter: 42 }
    saveToLocalStorage(key, state)
    const savedState = JSON.parse(
      localStorage.getItem(key) as string,
    ) as typeof state
    return expect(savedState).toEqual(state)
  })
})
