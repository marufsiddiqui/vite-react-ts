import { useBook } from '../hooks/useBook.ts'
import { BookDetail } from './BookDetail.tsx'

export function BookDetailContainer() {
  const { book } = useBook()

  return <BookDetail book={book} />
}
