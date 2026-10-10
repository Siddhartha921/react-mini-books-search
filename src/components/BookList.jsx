import BookCard from "./BookCard";

function BookList({ books }) {
  if (books.length === 0) {
    return (
      <p className="empty-message">
        No books found.
      </p>
    );
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.key}
          book={book}
        />
      ))}
    </div>
  );
}

export default BookList;