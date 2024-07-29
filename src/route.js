import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
function RouteSetting() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
    </Routes>
  );
}

export default RouteSetting;
