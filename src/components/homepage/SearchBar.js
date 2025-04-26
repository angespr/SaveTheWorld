import '../../styles/homepage/SearchBar.css';

function SearchBar() {
  return (
    <div className="search-container">
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
