import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Admission from "./component/pages/Admisson/Admission";
import OurStudents from "./component/pages/Our students/OurStudents";
function RouteSetting() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="/Admission" element={<Admission />} />
      <Route path="/our students" element={<OurStudents />} />

    </Routes>
  );
}

export default RouteSetting;
