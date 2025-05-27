import { createContext, useState, useEffect } from "react";
import isTokenExpired from "../utility/isTokenExpired.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log("AuthProvider useEffect running!");

    if (accessToken && !isTokenExpired(accessToken)) {
      console.log("Valid token. Setting user and login state.");
      setUser(userInfo);
      setIsLoggedIn(true);
    } else if (accessToken) {
      console.log("Expired token. Removing it.");
      localStorage.removeItem("accessToken");
    } else {
      console.log("No token found.");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
