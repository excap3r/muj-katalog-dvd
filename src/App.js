import Fuse from 'fuse.js';
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import dvds from "./dvds.json";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const flattenMovies = (folders) => {
    const movies = [];

    folders.forEach((folder) => {
      folder.pages.forEach((page, pageIndex) => {
        page.forEach((title) => {
          movies.push({
            title,
            folder: folder.id,
            page: pageIndex + 1,
          });
        });
      });
    });

    return movies;
  };

  const handleSearch = (searchTerm) => {
    setSearchPerformed(true);

    const fuseOptions = {
      keys: ["title"],
      shouldSort: true,
      includeScore: true,
      threshold: 0.2,
      ignoreLocation: true,
      ignoreFieldNorm: true,
    };

    const flattenedMovies = flattenMovies(dvds.folders);
    const fuse = new Fuse(flattenedMovies, fuseOptions);
    const fuseResults = fuse.search(searchTerm);
    const results = fuseResults.map((result) => result.item);

    setSearchResults(results);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Můj katalog DVD</h1>
      <SearchBar onSearch={handleSearch} />
      {searchPerformed && <MovieList movies={searchResults} />}
    </div>
  );
};

export default App;
