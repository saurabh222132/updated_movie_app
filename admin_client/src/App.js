import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./features/Auth/login";
import { Homepage } from "./features/Homepage/homepage";
import { Protected } from "./app/Protected";

import "./App.css";
import { Register } from "./features/Auth/register";
import { MovieList } from "./features/Homepage/MovieScrollBarLeftside/movieList";

const router = createBrowserRouter([
  { path: "/counter", element: <Counter></Counter> },
  { path: "/", element: <Login></Login> },
  { path: "/register", element: <Register></Register> },
  { path: "/login", element: <Login></Login> },

  {
    path: "/homepage",
    element: (
      <Protected>
        <Homepage> </Homepage>
      </Protected>
    ),
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
