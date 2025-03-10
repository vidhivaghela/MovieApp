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
    setSearchQuery("");
  };

  console.log(searchQuery);

  return (
    <div className="w-full box-border py-8">
      <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-8 flex gap-4 px-4">
        <input
          type="text"
          placeholder="Search for movies"
          className="flex-1 p-3 bg-gray-800 text-white text-lg rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-red-600 text-white font-medium rounded transition duration-200 hover:bg-red-700 whitespace-nowrap"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 w-full box-border">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
