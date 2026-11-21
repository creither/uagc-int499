import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";
import StreamList from "./StreamList";
import Movies from "./Movies";
import Cart from "./Cart";
import About from "./About";

function App() {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (title) => {
    setMovies([
      ...movies,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const toggleComplete = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, completed: !movie.completed }
          : movie
      )
    );
  };

  const editMovie = (id, newTitle) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id
          ? { ...movie, title: newTitle }
          : movie
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <h1>StreamList</h1>

          <div className="navLinks">
            <Link to="/">Home</Link>
            <Link to="/movies">TMDB Movies</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <StreamList
                movies={movies}
                addMovie={addMovie}
                deleteMovie={deleteMovie}
                toggleComplete={toggleComplete}
                editMovie={editMovie}
              />
            }
          />

          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;