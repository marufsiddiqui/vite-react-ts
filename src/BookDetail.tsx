export function BookDetail({ book }: { book: Book }) {
  return (
    <div className="detail">
      <h2 className="book-title">{book.name}</h2>
    </div>
  )
}
