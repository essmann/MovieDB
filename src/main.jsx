import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './css/Header.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
// A function to check login status

// Root component that holds the global state for `isLoggedIn`

const root = document.getElementById("root");

createRoot(root).render(
  
  <GoogleOAuthProvider clientId="621707536726-6sigj02j4qqu4t8upatok2ocsp3etg88.apps.googleusercontent.com">
        <StrictMode>
          
            <App /> 
        </StrictMode>
    </GoogleOAuthProvider>
);
