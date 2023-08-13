import { render, screen } from '@testing-library/react'

import { BookDetail } from './BookDetail.tsx'

describe('BookDetail', () => {
  it('renders correctly', () => {
    const props = {
      book: {
        id: 1,
        name: 'Refactoring',
        description: 'Refactoring is a book about...',
      },
    }

    render(<BookDetail {...props} />)
    expect(screen.getByRole('heading')).toHaveTextContent(props.book.name)
    expect(screen.getByText(props.book.description)).toBeInTheDocument()
  })

  it('renders correctly with no description', () => {
    const props = {
      book: {
        id: 1,
        name: 'Refactoring',
      },
    }

    render(<BookDetail {...props} />)
    const description = screen.getByTestId('book-description')
    expect(description).toHaveTextContent(props.book.name)
  })
})
