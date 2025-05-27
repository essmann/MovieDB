import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import { GoogleLogin } from "@react-oauth/google";
import LoginPage from "./pages/LoginPage";
import isTokenExpired from "./utility/isTokenExpired";
function App() {
  const [counter, setCounter] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState({});
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    var userInfo = localStorage.getItem("userInfo");
    console.log("useEffect for LocalStorage running once!");
    if (accessToken && !userInfo) {
      return;
    }

    if (accessToken && !isTokenExpired(accessToken)) {
      // Your logic here — check localStorage and do things

      console.log(
        "Valid access token found in local storage. Setting user information.."
      );
      setUser(userInfo);

      // Mark as run so it never runs again this session
    } else if (accessToken) {
      console.log("Expired access token. Removing token..");
      localStorage.removeItem("accessToken");
    } else {
      console.log("No access token found in local storage.");
    }
  }, []);
  console.log("Parent App is being re-rendered. The state is updated.");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              counter={counter}
              setCounter={setCounter}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/test"
          element={
            <div>
              {/* Make sure to display or use the login status properly */}
              <p>Logged In: {isLoggedIn ? "Yes" : "No"}</p>
              {/* If needed, you can handle login/logout here */}
            </div>
          }
        />
        <Route path="/title/:id" element={<MoviePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<div>Default route!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
