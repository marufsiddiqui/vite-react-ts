import Typography from '@mui/material/Typography'
import { Route, Routes } from 'react-router'

import { BookDetailContainer } from './BookDetailContainer.tsx'
import { BookListContainer } from './BookListContainer.tsx'

function App() {
  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes>
        <Route path="/" element={<BookListContainer />} />
        <Route path="/books/:id" element={<BookDetailContainer />} />
      </Routes>
    </div>
  )
}

export default App
