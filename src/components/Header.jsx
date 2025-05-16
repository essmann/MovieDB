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
import getMovie from "../api/getMovie";
import { useRef } from "react";

async function handleSearchInput(e, setShowItems) {
  console.log(e.target.value);
  let query = e.target.value;
  console.log(`handleSearchInput: sending ${e.target.value} to getMovies`);
  query = query.split(" ").join("+");
  let response;
  try {
    response = await getMovie(query);
  } catch {
    return;
  }
  if (!response) {
    return;
  }
  console.log(response["Search"]);
  setShowItems(response["Search"]);
}

function handleClickGlobal(event, setSuggestionVisible, suggestionsRef, inputRef) {

  if (
    suggestionsRef.current &&
    !suggestionsRef.current.contains(event.target)
    && !inputRef.current.contains(event.target)
  ) {
    
    setSuggestionVisible(false);
    console.log("You have clicked outside of the input box or suggestions panel!");
    
  }
  else if(suggestionsRef.current.contains(event.target) || inputRef.current.contains(event.target)){
    setSuggestionVisible(true);
    console.log("You have clicked the input box!");
  }
  
  
}

function Header(props) {
  const suggestionsRef = useRef(null); //references the element
  const inputRef = useRef(null);
  const [suggestionVisible, setSuggestionVisible] = useState(true);
  useEffect(() => {
    console.log("useEffect!");

    document.addEventListener("click", (event) => {
      return handleClickGlobal(event, setSuggestionVisible, suggestionsRef, inputRef);
    });
    //[] mneans it will only run once, after render. we can add a listener then
  }, []);
  console.log("Header refreshing");

  const [showItems, setShowItems] = useState([]);

  const username = "essmann";
  const loggedIn = props.loggedIn;

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
          <img src={imdbLogo} width={64} height={32} className="mr-3" />
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
            <div id="watchlist" className="flex">
              <img src={listIcon} />
              <span className="ml-1 mr-3 text-white">Watchlist</span>
              <span className="border-r-2 mr-3"></span>
            </div>
            {loggedIn ? (
              <div id="userNav" className="flex">
                <img src={userIcon} alt="" width={24} height={24} />
                <span id="username" className="mb-1 ml-2">
                  {username}
                </span>
                <img src={arrowDown} alt="" width={24} height={24} />
              </div>
            ) : (
              <div id="userNav" className="flex">
                <span id="username" className="mb-1 ml-2">
                  Sign in
                </span>
                <img src={arrowDown} alt="" width={24} height={24} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
