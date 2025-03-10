function MovieCard({ movie }) {
    console.log(movie);
  
    function onFavouriteClick() {
      alert("clicked");
    }
  
    return (
      <div className="relative overflow-hidden bg-gray-900 rounded-lg transition-transform duration-200 hover:-translate-y-1 flex flex-col h-full">
        {/* Movie Poster */}
        <div className="relative w-full aspect-[2/3]">
          <img src={movie.url} alt={movie.title} className="w-full h-full object-cover" />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 transition-opacity duration-200 hover:opacity-100 flex flex-col justify-end p-4">
            {/* Favorite Button */}
            <button 
              className="absolute top-4 right-4 text-white text-2xl p-2 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 hover:bg-black/80"
              onClick={onFavouriteClick}
            >
              ♡
            </button>
          </div>
        </div>
  
        {/* Movie Info */}
        <div className="p-4 flex flex-col flex-1 gap-2">
          <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
          <p className="text-gray-400 text-sm">{movie.release_date}</p>
        </div>
      </div>
    );
  }
  
  export default MovieCard;
  