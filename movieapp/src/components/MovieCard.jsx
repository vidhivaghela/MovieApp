function MovieCard({movie}) {  //It is the object for movie name, release date or image
    console.log(movie)
    function onFavouriteClick() {
        alert("clicked")
    }

    return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt="{movie.title}"/>
            <div className="moview-overlay">
                <button className="favourite-btn" onClick={onFavouriteClick}>
                ♡
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default MovieCard



