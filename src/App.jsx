import React, { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spiderman", Ratings: 3 },
    { id: 2, title: "Superman", Ratings: 5 },
    { id: 3, title: "Batman", Ratings: 7 },
    { id: 4, title: "Ironman", Ratings: 8.4 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) =>
        m.id === 1 ? { ...m, title: "John Wick 5", Ratings: 6 } : m
      )
    );
  };

  return (
    <div>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Change Title</button>
    </div>
  );
};

export default App;
