import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export function useBook() {
  const { id } = useParams<string>()
  const [book, setBook] = useState<Book>({ id: '0', name: '' })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchBook = async () => {
      setError(false)
      setLoading(true)
      try {
        const book = await axios.get(`http://localhost:4000/books/${id}`)
        setBook(book.data)
      } catch (e) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchBook()
  }, [id])

  return {
    book,
    loading,
    error,
  }
}
