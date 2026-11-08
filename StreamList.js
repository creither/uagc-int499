import React, { useState } from "react";

function StreamList({ movies, addMovie }) {
  const [movieTitle, setMovieTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movieTitle.trim() === "") {
      return;
    }

    console.log(movieTitle);

    addMovie(movieTitle);

    setMovieTitle("");
  };

  return (
    <div className="page">
      <h1>Welcome to StreamList</h1>

      <p>Add your favorite movies to your streaming list.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Movie Title"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />

        <button type="submit">
          Add Movie
        </button>
      </form>

      <div className="movie-list">
        <h3>My Stream List</h3>

        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StreamList;