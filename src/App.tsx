import React, { useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import City from "./Components/City/City";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Pune from "./Components/City/Pune";
import Nashik from "./Components/City/Nashik";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-MKZKNL6MW7";

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
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, []);

  const handleClick = () => {
    ReactGA.event("button_click", {
      category: "Button",
      label: "GA4 Demo Event",
    });
  };
  return (
    <div className="App">
      <RouterProvider router={router} />
      <button onClick={handleClick}>GA4 Demo Event</button>
    </div>
  );
}

export default App;
