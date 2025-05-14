import React from "react";
import imdbLogo from "../assets/IMDB_Logo_2016.svg";
import burgerIcon from "../assets/white_hamburg.svg";
import userIcon from "../assets/user_icon_white.svg";
import searchIcon from "../assets/search.svg";
import arrowDown from "../assets/arrow_down_white.svg";
import listIcon from "../assets/list_icon_white.svg";
import "../css/Header.css";
import SuggestionCard from "./SuggestionCard";

function Header(props) {
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
        <div className="searchContainer parent">
          <div className="searchContainer" id="searchBox">
            <div className="border-r-1 ml-2 flex">
              <span className="font-bold">All</span>
              <img src={arrowDown} width={24} height={24} />
            </div>
            <input placeholder="search IMDb" className="ml-1" />

            <img src={searchIcon} className="ml-auto" />
          </div>
          <SuggestionCard/>;
         
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
