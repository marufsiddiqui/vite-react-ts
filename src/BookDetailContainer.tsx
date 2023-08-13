import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export function BookDetailContainer() {
  const { id } = useParams<string>()
  const [book, setBook] = useState<Book>()

  useEffect(() => {
    const fetchBook = async () => {
      const book = await axios.get(`http://localhost:4000/books/${id}`)
      setBook(book.data)
    }
    fetchBook()
  }, [id])

  return (
    <div className="detail">
      <h2 className="book-title">{book?.name}</h2>
    </div>
  )
}
