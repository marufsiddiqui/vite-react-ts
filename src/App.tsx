import Typography from '@mui/material/Typography'
import axios from 'axios'
import { useEffect, useState } from 'react'

import { BookList } from './BookList.tsx'

function App() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    axios.get('http://localhost:4000/books').then((res) => {
      setBooks(res.data)
    })
  }, [])

  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList books={books} />
    </div>
  )
}

export default App
