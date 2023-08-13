import { useBooks } from '../hooks/useBooks.ts'
import { BookList } from './BookList.tsx'

export function BookListContainer() {
  const { books, loading, error } = useBooks()
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error...</p>
  }
  return <BookList books={books} />
}
