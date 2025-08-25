
import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDescription({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Film non trouvé</h2>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">⬅ Retour à l’accueil</Link>
    </div>
  );
}

export default MovieDescription;
