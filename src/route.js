import React from "react";
import { Routes, Route } from "react-router-dom";
import Admission from "./component/pages/Admisson/Admission";
import OurStudents from "./component/pages/Our students/OurStudents";
// import CustomNavbar from "./component/Navbar/Navbar";
import Home from "./component/pages/Home/Home"
function RouteSetting() {
  return (
    <Routes>
      {/* <Route path="/" element={< CustomNavbar/>} /> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/Admission" element={<Admission />} />
      <Route path="/ourstudents" element={<OurStudents />} />

    </Routes>
  );
}

export default RouteSetting;
