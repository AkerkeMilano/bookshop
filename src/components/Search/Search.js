import { useState } from "react";
import BooksList from "../BooksList/BooksList";
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css";

const Search = ({ books }) => {
  const [searchField, setSearchField] = useState("");
  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchField.toLowerCase());
  });
  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <div className="Search">
      <div className="search-field">
        <input
          type="search"
          className="search-input"
          placeholder="Search books..."
          onChange={handleSearchChange}
        ></input>
      </div>

      <BooksList books={filteredBooks} />
    </div>
  );
};

export default Search;
