import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import { GoogleLogin } from "@react-oauth/google";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext.jsx";
import RatingsPage from "./pages/RatingsPage.jsx";
function App() {
  const [counter, setCounter] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("Parent App is being re-rendered. The state is updated.");

  return (
    <AuthProvider>
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
          <Route path = "/user/:userId/watchlist" />
          <Route path = "/user/:userId/ratings"  element={<RatingsPage/>}/>
          <Route path="/title/:id" element={<MoviePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<div>Default route!</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
