import { useParams } from "react-router";
import "../css/RatingsPage.css";
import Header from "../components/Header";
import RatingsRow from "../components/RatingsRow";
import { useEffect, useState } from "react";
import GetRatedMovies from "../api/aspnet/GetRatedMovies.js";

function RatingsPage() {
  const [ratedMovies, setRatedMovies] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
  async function fetchRatedMovies() {
    console.log("ratingspage");
    try {
      const responseMovies = await GetRatedMovies(userId);
      console.log(responseMovies); // Debugging line
      setRatedMovies(responseMovies);
    } catch (error) {
      console.error("Failed to fetch rated movies:", error);
      // Optional: fallback to hardcoded data for testing/demo
      // setRatedMovies(fallbackMovies); <-- Define fallbackMovies if needed
    }
  }

  fetchRatedMovies();
}, [userId]);

  console.log(userId);

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 text-white">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-600 pb-2">
          Your Ratings
        </h2>
        <div className="space-y-4">
          {ratedMovies?.map((movie, index) => (
            <RatingsRow key={movie.imdbID || index} movie={movie} rank={index + 1} />
          ))}
        </div>
      </div>
    </>
  );
}

export default RatingsPage;
