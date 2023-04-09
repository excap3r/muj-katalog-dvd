import React from 'react';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return <p>Žádné filmy nebyly nalezeny.</p>;
  }

  return (
    <ul className="list-group">
      {movies.map((movie) => (
        <li key={movie.title} className="list-group-item">
          <strong>{movie.title}</strong> – Složka {movie.folder}, Strana {movie.page}
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
