import React, { Children } from "react";
import Pune from "./Pune";
import Nashik from "./Nashik";
import { Link, Outlet, Route, Routes } from "react-router-dom";

function City() {
  return (
    <div>
      <Link to="pune">Pune</Link>
      <div></div>
      <Link to="nashik">Nashik</Link>
      <Outlet />
    </div>
  );
}

export default City;
