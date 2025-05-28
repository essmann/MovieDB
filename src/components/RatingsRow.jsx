function RatingsRow({ movie, rating, rank }) {
  const tempImg =
    "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_SX300.jpg";

  return (
    
    <div className="flex items-center gap-4 p-4 border-b border-gray-700 hover:bg-gray-800 transition" data-imdbid={movie.imdbID}>
    
      {/* Poster */}
      <div className="w-24 h-36 overflow-hidden rounded-lg shadow-md flex-shrink-0">
        <img
          src={movie?.Poster || tempImg}
          alt={movie?.Title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Movie Info */}
      <div className="flex-1 text-white space-y-1">
        <div className="text-sm text-gray-400">Rated on May 26, 2025</div>

        <div className="text-xl font-semibold">
          <span className="text-yellow-400 mr-1">{rank ?? "1."}</span>
          {movie?.Title}
        </div>

        <div className="flex gap-3 text-sm text-gray-400">
          <span>{movie?.Year ?? "1968"}</span>
          <span>{movie?.Runtime ?? "1h 36m"}</span>
          <span>{movie?.Rated ?? "R"}</span>
        </div>
      </div>

      {/* Rating */}
      <div className="text-3xl font-bold text-yellow-400">{rating ?? "★ 8.5"}</div>
    </div>
  );
}

export default RatingsRow;
