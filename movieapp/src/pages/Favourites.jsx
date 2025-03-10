function Favourites() {
  return (
    <div className="w-full p-8 box-border">
      <h2 className="mb-8 text-center text-4xl text-white drop-shadow-lg">
        Your Favourite Movies
      </h2>

      <div className="text-center p-16 bg-white/5 rounded-xl mx-auto max-w-lg">
        <h2 className="mb-4 text-3xl text-red-600">No Favourite Movies yet</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Start adding movies to your favourites and they will appear here!
        </p>
      </div>
    </div>
  );
}

export default Favourites;
