import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Venom", release_date: "2020" },
    { id: 2, title: "Little", release_date: "2022" },
    { id: 3, title: "Half", release_date: "2024" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery(" ");
  };

  console.log(searchQuery);

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // onchange = Event , To get the value which we put in the search input we use e.target.value
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) => 
            (
              <MovieCard movie={movie} key={movie.id} /> // using this state to conditionally render this movie card only if the begining of the movie title begins with the "searchQuery"
            )
        )}
      </div>
    </div>
  );
}

export default Home;

// (.map) is used to dynamically render typically an array of values
