import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/Header.css'
import HomePage from './pages/HomePage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/test",
    element: <><h1>Hello World</h1></>
  },
]);

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
