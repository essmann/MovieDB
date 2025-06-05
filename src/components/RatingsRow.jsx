import { Link } from "react-router";

function RatingsRow({ movie, rating, rank }) {
  const tempImg =
    "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_SX300.jpg";
  console.log("Rendering RatingsRow for movie:", movie);
  console.log("Movie details:", movie);
  console.log("Rating:", rating);
  console.log("Rank:", rank);

  const userRating = movie.userData?.userRating || "N/A";
  const dateRated = movie.userData?.dateRated || "N/A";
  const description = movie?.plot || "No description available.";

  return (
    <Link to={`/title/${movie?.imdbID}`}>
      <div
        className="flex items-start gap-4 p-4 border-b border-gray-700 hover:bg-gray-800 transition"
        data-imdbid={movie.movieId}
      >
        {/* Poster */}
        <div className="w-24 h-36 overflow-hidden rounded-lg shadow-md flex-shrink-0">
          <img
            src={movie?.poster || tempImg}
            alt={movie?.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Movie Info */}
        <div className="flex-1 text-white space-y-2">
          <div className="text-sm text-gray-400" id="ratingsPageMovieDate">
            Date added: {dateRated}
          </div>

          <div className="text-xl font-semibold">
            <span className="text-yellow-400 mr-1">{rank ?? "1."}</span>
            {movie?.title}
          </div>

          <div className="flex gap-3 text-sm text-gray-400">
            <span>{movie?.year ?? "1968"}</span>
            <span>{movie?.runtime ?? "1h 36m"}</span>
            <span>{movie?.rated ?? "R"}</span>
          </div>

          <p className="text-sm text-gray-300 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Rating */}
        <div className="text-3xl font-bold text-yellow-400 mt-1">
          {`${userRating} ★`}
        </div>
      </div>
    </Link>
  );
}

export default RatingsRow;
