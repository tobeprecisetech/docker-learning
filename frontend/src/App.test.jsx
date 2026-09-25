import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import '@testing-library/jest-dom'
import App from './App'

describe('App', () => {
  test('renders the application title', () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: () =>
        Promise.resolve({
          message: 'Hello from Node.js Backend!',
        }),
    })

    render(<App />)

    expect(
      screen.getByText('React + Node Docker App')
    ).toBeInTheDocument()
  })
})