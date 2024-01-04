import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('renders main page correctly', () => {
  it('should render the page correctly', () => {
    render(<App />)
    const h1 = screen.queryByText('x-react-template')

    expect(h1).toBeInTheDocument()
  })
})
