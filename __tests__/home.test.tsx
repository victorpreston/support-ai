import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from '../app/page'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
    }
  },
}))

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Page />)
    expect(screen.getByText('Transform Support into a')).toBeInTheDocument()
  })
})