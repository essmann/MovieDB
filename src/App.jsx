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
              loggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route
          path="/test"
          element={
            <div>
              loggedIn={isLoggedIn}
              handleLogin={() => setIsLoggedIn(true)}
              handleLogout={() => setIsLoggedIn(false)}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
