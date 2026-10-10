import { useState } from "react";

function SearchBar({ onSearch }) {
  const [bookTitle, setBookTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const title = bookTitle.trim();

    if (!title) {
      return;
    }

    onSearch(title);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter book title"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;