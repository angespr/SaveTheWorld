import '../../styles/homepage/SearchBar.css';
import { useState } from 'react';

function SearchBar() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="search-container">
      <div className="filter-container">
        <button type="button" className="filter-toggle" onClick={toggleFilters}>
          Filter
          <i class="fa-solid fa-caret-down"></i>
        </button>
        {showFilters && (
          <div className="filter-dropdown">
            <label><input type="checkbox" name="filter1" /> Option 1</label>
            <label><input type="checkbox" name="filter2" /> Option 2</label>
            <label><input type="checkbox" name="filter3" /> Option 3</label>
          </div>
        )}
      </div>

      <form action="/action_page.php" className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          name="search"
        />
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
