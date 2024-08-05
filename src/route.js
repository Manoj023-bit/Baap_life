import React from "react";
import { Routes, Route } from "react-router-dom";
import Admission from "./component/pages/Admisson/Admission";
import OurStudents from "./component/pages/Our students/OurStudents";
import CustomNavbar from "./component/Navbar/Navbar";
function RouteSetting() {
  return (
    <Routes>
      <Route path="/" element={< CustomNavbar/>} />
      <Route path="/Admission" element={<Admission />} />
      <Route path="/our students" element={<OurStudents />} />

    </Routes>
  );
}

export default RouteSetting;
