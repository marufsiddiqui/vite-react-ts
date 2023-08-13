import { Link } from 'react-router-dom'

export function BookList({ books }: { books: Book[] }) {
  return (
    <div data-test="book-list">
      {books.map((book, index) => (
        <div className="book-item" key={index}>
          <h2>{book.name}</h2>
          <Link to={`/books/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}
