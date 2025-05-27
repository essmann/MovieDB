import React, { useEffect, useState } from "react";
import imdbLogo from "../assets/IMDB_Logo_2016.svg";
import burgerIcon from "../assets/white_hamburg.svg";
import userIcon from "../assets/user_icon_white.svg";
import searchIcon from "../assets/search.svg";
import arrowDown from "../assets/arrow_down_white.svg";
import listIcon from "../assets/list_icon_white.svg";
import "../css/Header.css";
import SuggestionCard from "./SuggestionCard";
import debounce from "../utility/debounce";
import { useContext } from "react";
import { useRef } from "react";
import handleClickHome from "../event_handlers/handleClickHome";
import handleSearchInput from "../event_handlers/handleSearchInput";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
function Header() {
  const suggestionsRef = useRef(null); //references the element
  const inputRef = useRef(null);

  const [suggestionVisible, setSuggestionVisible] = useState(true);

  const clickHandler = (event) => {
    return handleClickHome(
      event,
      setSuggestionVisible,
      suggestionsRef,
      inputRef
    );
  };

  useEffect(() => {
    console.log("useEffect! I fire once");

    // Define the handler function once

    // Remove the listener
    //document.removeEventListener("click", clickHandler);

    // Add the listener
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
    //[] mneans it will only run once, after render. we can add a listener then
  }, []);
  console.log("Header refreshing");

  const { isLoggedIn, user } = useContext(AuthContext);
  console.log(
    `Context state from within Header : ${isLoggedIn}, ${JSON.stringify(user)}`
  );

  const [showItems, setShowItems] = useState([]);
  const loggedIn = isLoggedIn;

  return (
    <div id="header">
      <div id="header-box" className="flex bg-[#121212] p-3">
        <div className="flex" id="logo-container">
          <div className="flex items-center">
            <img
              src={burgerIcon}
              width={24}
              height={24}
              className="ml-3 mr-3"
            />
            <span className="menuText mr-2">Menu</span>
          </div>
          <Link to={`/`}>
            <img src={imdbLogo} width={64} height={32} className="mr-3" />
          </Link>
        </div>
        <div className="searchContainer parent" ref={inputRef}>
          <div className="searchContainer" id="searchBox">
            <div className="border-r-1 ml-2 flex">
              <span className="font-bold">All</span>
              <img src={arrowDown} width={24} height={24} />
            </div>
            <input
              placeholder="search IMDb"
              className="ml-1"
              id="searchInput"
              onInput={debounce((e) => handleSearchInput(e, setShowItems), 150)}
            />

            <img src={searchIcon} className="ml-auto" />

            <div className="searchSuggestions" ref={suggestionsRef}>
              <div className="searchSuggestions">
                {showItems &&
                  suggestionVisible &&
                  showItems.map((item, index) => (
                    <SuggestionCard
                      key={index}
                      title={item.Title}
                      year={item.Year}
                      poster={item.Poster}
                      type={item.Type}
                      imdbId={item.imdbID}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div id="loginContainer" className="ml-4 bl-1 flex items-center">
          <div id="userContainer" className="flex">
            {loggedIn ? (
              <Link id="watchlist" className="flex" to="/watchlist">
                <img src={listIcon} />
                <span className="ml-1 mr-3 text-white">Watchlist</span>
                <span className=""></span>
              </Link>
            ) : (
              <></>
            )}

            {loggedIn ? (
              <>
                <div id="userNav" className="flex" onClick={() => {
                   let popup = document.querySelector("#userPopup");
                   var isVisible = popup.style.visibility == "visible" ? true: false; 
                    return isVisible ? popup.style.visibility = "hidden": popup.style.visibility = "visible";
                  }}>
                  <img src={userIcon} alt="" width={24} height={24} />
                  <span id="username" className=" ml-2">
                    {user?.name || "User"}
                  </span>
                  <img src={arrowDown} alt="" width={24} height={24} />
                </div>

                <div
                  id="userPopup"
                  
                >
                  <ul className="">
                    <Link to="/">Your Profile</Link>
                    <Link>Your Watchlist</Link>
                    <Link>Your Ratings</Link>
                    <Link>Your Lists</Link>
                    <Link>Account Settings</Link>
                    <Link>Sign Out</Link>
                  </ul>
                </div>
              </>
            ) : (
              <div id="userNav" className="flex">
                <Link id="username" className="mb-1 ml-2" to={"/login"}>
                  Sign in
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
