import "../css/MoviePage.css";
import "../css/Header.css";
import { useParams } from "react-router";
import Header from "../components/Header";
import getMovieById from "../api/getMovieById";
import { useEffect } from "react";
import { useState } from "react";
import starIcon from "../assets/imdb_star_yellow.svg"
import emptyStarIcon from "../assets/empy_blue_star.svg"

function MoviePage() {
  let params = useParams(); //gets the search parameters

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    console.log("UseEffect from moviepage");
    async function fetchMovie() {
      let movie = await getMovieById(params.id);
      console.log("Fetched movie from getMovieById");
      setMovie(movie);
      // Do something with movie here
    }
    fetchMovie();
  }, [params.id]);
  if (!movie) return <div>Loading...</div>;

  let genreArray = movie.Genre.split(",");
  let actors = movie.Actors.split(",");
  let writers = movie.Writer.split(",");
  let directors = movie.Director.split(",");
  movie.imdbVotes = `${Math.floor(parseInt(movie.imdbVotes))}K`

  return (

    <>
    {    console.log("movie Page rendering!")}
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
                  <div>
                    <div>IMDB rating</div>
                   <div className="flex">
                      <img src={starIcon} height={24} width={24}></img>
                      {movie.imdbRating}
                      </div>
                  </div>
                  <div>
                    <div>Your rating</div>
                    <div className="flex">
                      <img src={emptyStarIcon} className="mb-2" width={24} height={24}/>
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
              return <a  id="genreItem"key={key} href=""> {genre} </a>;
            })}
          </div>
          <div id="summary">{movie.Plot}</div>
          <div id="director" className="flex ">
            <label>Director: </label>
            {directors.map((director, key) => {
              return <a  id="directorItem"key={key} href=""> {director} </a>;
            })}
          </div>
          <div id="writers" className="flex ">
            <label>Writers: </label>
            {writers.map((writer, key) => {
              return key + 1 < writers.length
                ? <a id="actorItem" key={key} href="">{writer},</a>
                : <a key={key}>{writer}</a>;
                            
            })}
          </div>
          <div id="actors" className="flex ">
            <label>Actors: </label>
            {actors.map((actor, key) => {
              return key + 1 < actors.length
                ? <a id="actorItem" key={key} href="">{actor},</a>
                : <a key={key}>{actor}</a>;
                            
            })}
          </div>
        
              </div>
              
            </div>
          </div>
        </div>
          
          <div id="nominations">
            <div>
              {movie.Awards}
            </div>
          </div>
      </div>
       
    </>
  );
}

export default MoviePage;
