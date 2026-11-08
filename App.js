import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import StreamList from "./StreamList";
import Movies from "./Movies";
import Cart from "./Cart";
import About from "./About";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <Router>
      <div className="App">

        <nav>
          <ul>
            <li>
              <Link to="/">StreamList</Link>
            </li>

            <li>
              <Link to="/movies">Movies</Link>
            </li>

            <li>
              <Link to="/cart">Cart</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <StreamList
                movies={movies}
                addMovie={addMovie}
              />
            }
          />

          <Route
            path="/movies"
            element={<Movies />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="*"
            element={<h2>Page Not Found</h2>}
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;