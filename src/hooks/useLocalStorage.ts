import { useState, useEffect } from 'react'

/**
 * Custom hook for managing state in local storage.
 *
 * @template T - The type of the stored value.
 * @param key - The key to identify the local storage entry.
 * @param initialValue - The initial value or a function that returns the initial value.
 * @returns Tuple containing the stored value and a function to update it.
 */
const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(() => {
    const localValue = localStorage.getItem(key)
    if (localValue == null) {
      if (typeof initialValue === 'function') return initialValue() as T
      return initialValue
    } else {
      return JSON.parse(localValue) as T
    }
  })

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
