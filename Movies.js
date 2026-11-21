import React, { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);

  const API_KEY = "83f1462524de3f3de2d0f3beb3be74c4";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) =>
        console.error("Error:", error)
      );
  }, []);

  return (
    <div className="container">
      <h2>Popular TMDB Movies</h2>

      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movieCard"
        >
          <h3>{movie.title}</h3>

          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />

          <p>
            Rating: {movie.vote_average}
          </p>

          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default Movies;