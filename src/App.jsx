import { useState } from "react";

import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(bookTitle) {
    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(
        bookTitle
      )}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch books.");
      }

      const data = await response.json();

      if (!data.docs || data.docs.length === 0) {
        setBooks([]);
        return;
      }

      setBooks(data.docs.slice(0, 20));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <h1>📚 Mini Book Search</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p className="message">
          Searching for books...
        </p>
      )}

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {!loading && !error && books.length > 0 && (
        <BookList books={books} />
      )}

      {!loading && !error && books.length === 0 && (
        <p className="empty-message">
          Search for a book to see results.
        </p>
      )}
    </div>
  );
}

export default App;