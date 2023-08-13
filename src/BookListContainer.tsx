import { BookList } from './BookList.tsx'
import { useBooks } from './useBooks.ts'

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
