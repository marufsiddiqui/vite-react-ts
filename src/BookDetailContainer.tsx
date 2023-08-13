import { useBook } from './useBook.ts'

export function BookDetailContainer() {
  const { book } = useBook()

  return (
    <div className="detail">
      <h2 className="book-title">{book?.name}</h2>
    </div>
  )
}
