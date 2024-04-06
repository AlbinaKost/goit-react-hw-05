import React, { useState } from 'react';
import axios from 'axios';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = event => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        {
          headers: {
            Authorization: 'Bearer api_read_access_token'
          }
        }
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesPage;