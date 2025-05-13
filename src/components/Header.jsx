import React from "react";
import imdbLogo from "../assets/IMDB_Logo_2016.svg";
import burgerIcon from "../assets/white_hamburg.svg";
import userIcon from "../assets/user_icon_white.svg";
import searchIcon from "../assets/search.svg"
import arrowDown from "../assets/arrow_down_white.svg"
import listIcon from "../assets/list_icon_white.svg"
function Header() {
    const username = "essmann";
  return (
    <div id="header" className="">
      <div id="header-box" className="flex bg-[#121212] p-3  ">
        <div className="flex" id="logo-container">
            <div className="flex items-center ">
              <img src={burgerIcon} width={24} height={24} className="ml-3 mr-3 " />
            <span className="menuText mr-2">Menu</span>
            </div>
        <img src={imdbLogo} width={64} height={32} className="mr-3"/>
        </div>
        <div className="searchContainer ">
          <div className="border-r-1 ml-2 flex">
            <span className="font-bold">All</span>
            <img src={arrowDown} width={24} height={24}></img>
          </div>
          <input placeholder="search IMDb" className="ml-1"></input>
          <img src={searchIcon} className="ml-auto"></img>
        </div>
        <div id="loginContainer" className=" ml-4 bl-1 flex items-center ">
            <div id="userContainer" className="flex">
              <div id="watchlist" className="flex">
                  <img src={listIcon} ></img>
                  <span className="ml-1 mr-3 text-white">Watchlist</span>
                  <span className="border-r-2 mr-3"></span>
              </div>
                <div id = "userNav" className="flex ">
                  <img src={userIcon} alt="" width={24} height={24} />
                <span id="username" className=" mb-1 ml-2">{username}</span>
                <img src={arrowDown} alt="" width={24} height={24} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
      
export default Header;
//abc/// //tralallaa /tralala nigg
//this is a new comment;

//i wonder if this overwrites your changes when you pull! we wil see

//some new change!
