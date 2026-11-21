import React, { useState } from "react";
import {
  FaTrash,
  FaEdit,
  FaCheck,
  FaSave,
} from "react-icons/fa";

function StreamList({
  movies,
  addMovie,
  deleteMovie,
  toggleComplete,
  editMovie,
}) {
  const [movieTitle, setMovieTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!movieTitle.trim()) return;

    addMovie(movieTitle);

    setMovieTitle("");
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;

    editMovie(id, editText);
    setEditingId(null);
  };

  const completedMovies = movies.filter(
    (movie) => movie.completed
  ).length;

  return (
    <div className="container">
      <h2>My Stream List</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie title"
          value={movieTitle}
          onChange={(e) =>
            setMovieTitle(e.target.value)
          }
        />

        <button type="submit">
          Add Movie
        </button>
      </form>

      <div className="stats">
        <p>Total Movies: {movies.length}</p>
        <p>Watched Movies: {completedMovies}</p>
      </div>

      <ul className="movieList">
        {movies.map((movie) => (
          <li key={movie.id}>
            {editingId === movie.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) =>
                    setEditText(e.target.value)
                  }
                />

                <button
                  onClick={() =>
                    saveEdit(movie.id)
                  }
                >
                  <FaSave />
                </button>
              </>
            ) : (
              <>
                <span
                  className={
                    movie.completed
                      ? "completed"
                      : ""
                  }
                >
                  {movie.title}
                </span>

                <button
                  onClick={() =>
                    toggleComplete(movie.id)
                  }
                >
                  <FaCheck />
                </button>

                <button
                  onClick={() => {
                    setEditingId(movie.id);
                    setEditText(movie.title);
                  }}
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() =>
                    deleteMovie(movie.id)
                  }
                >
                  <FaTrash />
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;