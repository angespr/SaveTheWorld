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
            <div className="filter-option"><input type="checkbox" name="Beauty" />Beauty</div>
            <div className="filter-option"><input type="checkbox" name="Art" />Art</div>
            <div className="filter-option"><input type="checkbox" name="Fiber Arts" />Fiber Arts</div>
            <div className="filter-option"><input type="checkbox" name="Outdoor" />Outdoor</div>
            <div className="filter-option"><input type="checkbox" name="Pets" />Pets</div>
            <div className="filter-option"><input type="checkbox" name="Education" />Education</div>
            <div className="filter-option"><input type="checkbox" name="Cooking/Baking" />Cooking/Baking</div>
            <div className="filter-option"><input type="checkbox" name="Manual Labor" />Manual Labor</div>
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
