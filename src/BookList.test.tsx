import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import { BookList } from './BookList.tsx'

const renderWithRouter = (component: JSX.Element) => {
  return {
    ...render(<Router>{component}</Router>),
  }
}
describe('BookList', () => {
  it('renders books', async () => {
    const props = {
      books: [
        { name: 'Refactoring', author: 'Martin Fowler', id: 1 },
        { name: 'Clean Code', author: 'Robert C. Martin', id: 2 },
      ],
    }

    renderWithRouter(<BookList {...props} />)
    const headings = await screen.findAllByRole('heading')
    headings.forEach((heading, index) => {
      expect(heading).toHaveTextContent(props.books[index].name)
    })
  })
})
