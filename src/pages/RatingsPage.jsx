import { useParams } from "react-router";
import "../css/RatingsPage.css";
import Header from "../components/Header";
import RatingsRow from "../components/RatingsRow";
import { useEffect, useState } from "react";
import GetRatedMovies from "../api/aspnet/GetRatedMovies.js";
import arrowIcon from "../assets/arrow_down_white.svg";
import { useRef } from "react";
function RatingsPage() {
  const { userId } = useParams();
  const [ratedMovies, setRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const popupRef = useRef(null);
  const triggerRef = useRef(null);
  const movieContainerRef = useRef(null);
  useEffect(() => {
    async function fetchRatedMovies() {
      setLoading(true);
      setError(null);

      try {
        const responseMovies = await GetRatedMovies(userId);
        setRatedMovies(responseMovies);
      } catch (error) {
        setError("Failed to fetch rated movies.");
        console.error("Failed to fetch rated movies:", error);
      } finally {
        setLoading(false);
      }
    }

    if (userId) {
      fetchRatedMovies();
    }
  }, [userId]);


// Close popup on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        popupRef.current.style.visibility = "hidden"; // Hide the popup
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


function sortByDate(movieContainerRef, order = "desc") {
const ratedMoviesCopy = [...ratedMovies];
  ratedMoviesCopy.sort((a,b) => {
    let dateA = new Date(a.userData.dateRated);
    let dateB = new Date(b.userData.dateRated);
    console.log(dateA, dateB);
    return order === "desc" ? dateB - dateA : dateA - dateB;
    
  });
  console.log(ratedMoviesCopy);
  setRatedMovies(ratedMoviesCopy);
}
function sortByRating(movieContainerRef, order = "desc") {
const ratedMoviesCopy = [...ratedMovies];
  ratedMoviesCopy.sort((a,b) => {
    let ratingA = a.userData.userRating;
    let ratingB = b.userData.userRating;
    
    return order === "desc" ? ratingB - ratingA : ratingA - ratingB;
    
  });
  console.log(ratedMoviesCopy);
  setRatedMovies(ratedMoviesCopy);
}

  return (
    <>
      <Header />

       
      <div className="max-w-4xl mx-auto p-6 text-white" ref={triggerRef}>
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-600 pb-2">
          Your Ratings
        </h2>
        <div id="sortingContainer" className="flex justify-end ">
          <div className="flex items-center relative ">
            <div className="">Sort by</div>
            <img src={arrowIcon} className="w-4 h-4 ml-2 cursor-pointer " onClick={
              () => {
                let popup = document.querySelector("#sortByPopup")
                popup.style.visibility = (popup.style.visibility === "visible") ? "hidden" : "visible";
              }
            }/>
            {/* Sort By Popup */}
            <div id="sortByPopup" ref= {popupRef} className="absolute right-1 top-5 mt-2 w-40 bg-gray-800 border invisible  border-gray-700 rounded shadow-lg z-10 text-sm group-hover:block" >
              <div onClick={()=>sortByDate(movieContainerRef, "desc")} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Rating (High-Low) </div>
              <div  onClick={()=>sortByRating(movieContainerRef, "asc")} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Rating (Low-High)</div>
              <div onClick={()=>sortByDate(movieContainerRef, "desc")}className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Date Rated (Newest)</div>
              <div onClick={()=>sortByDate(movieContainerRef, "asc")} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Date Rated (Oldest)</div>
            </div>
          </div>
        </div>

        {loading && <p>Loading rated movies...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && ratedMovies.length === 0 && (
          <p>You have not rated any movies yet.</p>
        )}

        <div className="space-y-4" ref={movieContainerRef}>
          {ratedMovies.map((movie, index) => (
            <RatingsRow
              key={index}
              movie={movie}
              rank={index + 1}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default RatingsPage;
