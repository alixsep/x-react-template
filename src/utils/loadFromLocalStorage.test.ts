import { describe, it, expect, beforeEach } from 'vitest'
import loadFromLocalStorage from './loadFromLocalStorage'

describe('loadFromLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  const key = 'testKey'

  it('should load state from localStorage if exists', () => {
    const state = { counter: 42 }
    localStorage.setItem(key, JSON.stringify(state))
    const loadedState = loadFromLocalStorage(key, {})
    return expect(loadedState).toEqual(state)
  })

  it('should save initial state to localStorage if no state found', () => {
    const initialState = { counter: 0 }
    const loadedState = loadFromLocalStorage(key, initialState)
    return expect(loadedState).toEqual(initialState)
  })

  it('should return initial state if localStorage error occurs', () => {
    const initialState = { counter: 0 }
    localStorage.setItem(key, 'invalidJSON')
    const loadedState = loadFromLocalStorage(key, initialState)
    return expect(loadedState).toEqual(initialState)
  })
})
