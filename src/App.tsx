import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import City from "./Components/City/City";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Pune from "./Components/City/Pune";
import ReactGA from "react-ga";
import Nashik from "./Components/City/Nashik";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
  },
  {
    path: "/city",
    element: <City />,
    children: [
      {
        path: "pune",
        element: <Pune />,
      },
      {
        path: "nashik",
        element: <Nashik />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
]);

function App() {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
