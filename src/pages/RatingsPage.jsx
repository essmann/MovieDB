import { useParams } from "react-router";
import "../css/RatingsPage.css";
import Header from "../components/Header";
import RatingsRow from "../components/RatingsRow";
import { useEffect } from "react";
import { useState } from "react";

function RatingsPage() {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    console.log("ratingspage");
    setRatings([
      {
        Title: "Spider-Man: No Way Home",
        Year: "2021",
        imdbID: "tt10872600",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Spider-Man",
        Year: "2002",
        imdbID: "tt0145487",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Spider-Man: Homecoming",
        Year: "2017",
        imdbID: "tt2250912",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_SX300.jpg",
      },
      {
        Title: "Spider-Man 2",
        Year: "2004",
        imdbID: "tt0316654",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNGQ0YTQyYTgtNWI2YS00NTE2LWJmNDItNTFlMTUwNmFlZTM0XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Amazing Spider-Man",
        Year: "2012",
        imdbID: "tt0948470",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
      },
      {
        Title: "Spider-Man: Into the Spider-Verse",
        Year: "2018",
        imdbID: "tt4633694",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
      },
      {
        Title: "Spider-Man 3",
        Year: "2007",
        imdbID: "tt0413300",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODE2NzNhMDctYjUzMC00Y2M5LWI2Y2EtODJkZTFjN2Y5ODlmXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Spider-Man: Far from Home",
        Year: "2019",
        imdbID: "tt6320628",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzNhNTE0NWQtN2E1Ny00NjcwLTg1YTctMGY1NmMwODJmY2NmXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Amazing Spider-Man 2",
        Year: "2014",
        imdbID: "tt1872181",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg",
      },
      {
        Title: "Spider-Man: Across the Spider-Verse",
        Year: "2023",
        imdbID: "tt9362722",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_SX300.jpg",
      },
    ]);
  }, []);

  const { userId } = useParams();
  console.log(userId);
  return (
    <>
      <Header />
     <div className="max-w-4xl mx-auto p-6 text-white">
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-600 pb-2">
        Your Ratings
      </h2>
      <div className="space-y-4">
        {ratings?.map((movie, index) => (
          <RatingsRow key={movie.imdbID || index} movie={movie} rank={index + 1}/>
        ))}
      </div>
    </div>
    </>
  );
}

export default RatingsPage;
