import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './css/Header.css';
import App from './App';

// A function to check login status

// Root component that holds the global state for `isLoggedIn`

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <App /> {/* The App component is now the root and manages the state */}
  </StrictMode>,
);
