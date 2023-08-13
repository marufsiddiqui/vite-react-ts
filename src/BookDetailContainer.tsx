import { BookDetail } from './BookDetail.tsx'
import { useBook } from './useBook.ts'

export function BookDetailContainer() {
  const { book } = useBook()

  return <BookDetail book={book} />
}
