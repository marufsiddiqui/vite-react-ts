import axios from 'axios'
import { useEffect, useState } from 'react'

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false)
      setLoading(true)
      try {
        const res = await axios.get('http://localhost:4000/books')
        setBooks(res.data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchBooks()
  }, [])

  return { books, loading, error }
}
