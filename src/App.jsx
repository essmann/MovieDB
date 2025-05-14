import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  const [counter, setCounter] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
