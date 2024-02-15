import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      Welcome To Dream Home
      <div>
        <Link to="/city">City</Link>
        <div></div>
        <Link to="/home">Home</Link>
      </div>
    </div>
  );
}

export default Layout;
