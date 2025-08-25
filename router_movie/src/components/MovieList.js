import React from "react";
import { Link } from "react-router-dom";


function MovieList({ movies }) {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {movies.map((movie) => (
        <div key={movie.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h2>{movie.title}</h2>
          <img src={movie.posterURL} alt={movie.title} width="200" />
          <br />
          <Link to={`/movie/${movie.id}`}>Voir la description</Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
