import "../css/MoviePage.css";
import "../css/Header.css";
import { useParams } from "react-router";
import Header from "../components/Header";
import getMovieById from "../api/getMovieById";
import { useEffect } from "react";
import { useState } from "react";
import starIcon from "../assets/imdb_star_yellow.svg"
function MoviePage() {
  let params = useParams(); //gets the search parameters

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      let movie = await getMovieById(params.id);
      console.log("Fetched movie from getMovieById");
      setMovie(movie);
      // Do something with movie here
    }
    fetchMovie();
  }, []);
  if (!movie) return <div>Loading...</div>;

  let genreArray = movie.Genre.split(",");
  return (
    <>
      <Header />
      <div id="parentContainer">
        <div id="moviePageMovieContainer">
          <div id="movieContainer">
            <div id="moviePagePoster">
              <img src={movie.Poster} className="rounded-xl" />
            </div>

            <div id="movie_page_movie_header_container">
              <div id="movie_page_movie_info_container">
                <div id="moviePageTitle">
                  <div className="text-4xl">{movie.Title}</div>
                </div>

                <div id="moviePageMovieInfo">
                  <div>{movie.Year}</div>
                  <div>{movie.Rated}</div>
                  <div>{movie.Runtime}</div>
                </div>
              </div>
              <div id="movie_page_rating_container">
                <div id="movie_page_rating_headers">
                  <div>IMDB rating</div>
                  <div>Your rating</div>
                  <div>Popularity</div>
                </div>
                <div id="movie_page_rating">
                  <div className="">
                    
                    <div className="flex">
                      <img src={starIcon}></img>
                      {movie.imdbRating}
                      </div>
                    <span className="text-xs">{movie.imdbVotes}</span>
                  </div>
                  <div>Rate</div>
                  <div>1186</div>
                </div>
                <div id="genres">
            {genreArray.map((genre, key) => {
              return <a  id="genreItem"key={key} href=""> {genre} </a>;
            })}
          </div>
          <div id="summary">{movie.Plot}</div>
          <div id="director" className="flex ">
            <label>Directors: </label>
            <div>Director</div>
            <div>Sam Raimi</div>
          </div>
          <div id="writers" className="flex ">
            <label>Writers: </label>
            <div>Sam Raimi</div>
            <div>Alvin Sargent</div>
            <div>Ivan Raimi</div>
          </div>
          <div id="actors" className="flex ">
            <label>Actors: </label>
            <div>Tobey Maguire</div>
            <div>Kirsten Dunst</div>
            <div>Topher Grace</div>
          </div>
        
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoviePage;
