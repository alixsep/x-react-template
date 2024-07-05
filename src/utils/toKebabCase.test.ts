import { describe, it, expect } from 'vitest'
import toKebabCase from './toKebabCase'

describe('toKebabCase', () => {
  it('should convert a single word to lowercase', () => {
    const input = 'Hello'
    const expectedOutput = 'hello'
    expect(toKebabCase(input)).toBe(expectedOutput)
  })

  it('should convert multiple words separated by spaces to kebab-case', () => {
    const input = 'Happy Day'
    const expectedOutput = 'happy-day'
    expect(toKebabCase(input)).toBe(expectedOutput)
  })

  it('should handle camelCase input', () => {
    const input = 'happyDay'
    const expectedOutput = 'happy-day'
    expect(toKebabCase(input)).toBe(expectedOutput)
  })

  it('should handle PascalCase input', () => {
    const input = 'HappyDay'
    const expectedOutput = 'happy-day'
    expect(toKebabCase(input)).toBe(expectedOutput)
  })

  it('should handle strings with underscores', () => {
    const input = 'happy_day'
    const expectedOutput = 'happy-day'
    expect(toKebabCase(input)).toBe(expectedOutput)
  })

  it('should handle strings with multiple spaces and underscores', () => {
    const input = 'Happy   Day_with    underscores'
    const expectedOutput = 'happy-day-with-underscores'
    expect(toKebabCase(input)).toBe(expectedOutput)
  })

  it('should handle empty strings', () => {
    const input = ''
    const expectedOutput = ''
    expect(toKebabCase(input)).toBe(expectedOutput)
  })
})
