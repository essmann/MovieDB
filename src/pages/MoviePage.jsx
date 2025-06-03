import "../css/MoviePage.css";
import "../css/Header.css";
import { useParams } from "react-router";
import Header from "../components/Header";
import { useEffect } from "react";
import { useState } from "react";
import starIcon from "../assets/imdb_star_yellow.svg";
import emptyStarIcon from "../assets/empy_blue_star.svg";
import RatingPopup from "../components/RatingPopup";
import GetMovieById from "../api/aspnet/GetMovieById";
function MoviePage() {
  let params = useParams(); //gets the search parameters

  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    console.log("UseEffect from moviepage");
    async function fetchMovie() {
      console.log(params.id);
      let movie = await GetMovieById(params.id);
      console.log("Fetched movie from getMovieById");
      setMovie(movie);
      //setRating(movie?.MyRating || null);
      // Do something with movie here

      
    }
    fetchMovie();
  }, [params.id]);
  if (!movie) return <div>Loading...</div>;

  let genreArray = movie.genre.split(",");
  let actors = movie.actors.split(",");
  let writers = movie.writer.split(",");
  let directors = movie.director.split(",");
  movie.imdbVotes = `${Math.floor(parseInt(movie.imdbVotes))}K`;

  return (
    <>
      {console.log("movie Page rendering!")}
      <Header />
      <RatingPopup movie={movie} setRating={setRating} rating={rating} />
      <div id="parentContainer">
        <div id="moviePageMovieContainer">
          <div id="movieContainer">
            <div id="moviePagePoster">
              <img src={movie.poster} className="rounded-xl" />
            </div>

            <div id="movie_page_movie_header_container">
              <div id="movie_page_movie_info_container">
                <div id="moviePageTitle">
                  <div className="text-4xl">{movie.title}</div>
                </div>

                <div id="moviePageMovieInfo">
                  <div>{movie.year}</div>
                  <div>{movie.rated}</div>
                  <div>{movie.runtime}</div>
                </div>
              </div>
              <div id="movie_page_rating_container">
                <div id="movie_page_rating_headers">
                  <div>
                    <div>IMDB rating</div>
                    <div className="flex">
                      <img src={starIcon} height={24} width={24}></img>
                      {movie.imdbRating}
                    </div>
                  </div>
                  <div>
                    <div>Your rating</div>
                    <div className="flex" id="moviePageRateBtnContainer" onClick={
                      ()=>{
                        var ratingPopupElement =  document.querySelector("#ratingPopupContainer");
                        var visibility = ratingPopupElement.style.visibility;
                        visibility == "hidden" ? ratingPopupElement.style.visibility = "visible" : ratingPopupElement.style.visibility = "hidden";
                      }
                    }>
                      <img
                        src={emptyStarIcon}
                        className="mb-2"
                        width={24}
                        height={24}
                      />
                      <span>Rate</span>
                    </div>
                  </div>
                  <div>
                    <div>Votes</div>
                    <span className="text-xs ml-1 ">{movie.imdbVotes}</span>
                  </div>
                </div>

                <div id="genres">
                  {genreArray.map((genre, key) => {
                    return (
                      <a id="genreItem" key={key} href="">
                        {" "}
                        {genre}{" "}
                      </a>
                    );
                  })}
                </div>
                <div id="summary">{movie.Plot}</div>
                <div id="director" className="flex ">
                  <label>Director: </label>
                  {directors.map((director, key) => {
                    return (
                      <a id="directorItem" key={key} href="">
                        {" "}
                        {director}{" "}
                      </a>
                    );
                  })}
                </div>
                <div id="writers" className="flex ">
                  <label>Writers: </label>
                  {writers.map((writer, key) => {
                    return key + 1 < writers.length ? (
                      <a id="actorItem" key={key} href="">
                        {writer},
                      </a>
                    ) : (
                      <a key={key}>{writer}</a>
                    );
                  })}
                </div>
                <div id="actors" className="flex ">
                  <label>Actors: </label>
                  {actors.map((actor, key) => {
                    return key + 1 < actors.length ? (
                      <a id="actorItem" key={key} href="">
                        {actor},
                      </a>
                    ) : (
                      <a key={key}>{actor}</a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="nominations">
          <div>{movie.Awards}</div>
        </div>
      </div>
    </>
  );
}

export default MoviePage;
