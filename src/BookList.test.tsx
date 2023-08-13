import { render, screen } from '@testing-library/react'

import { BookList } from './BookList.tsx'

describe('BookList', () => {
  it('renders books', async () => {
    const props = {
      books: [
        { name: 'Refactoring', author: 'Martin Fowler', id: 1 },
        { name: 'Clean Code', author: 'Robert C. Martin', id: 2 },
      ],
    }

    render(<BookList {...props} />)
    const headings = await screen.findAllByRole('heading')
    headings.forEach((heading, index) => {
      expect(heading).toHaveTextContent(props.books[index].name)
    })
  })
})
