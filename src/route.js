import React from "react";
import { Routes, Route } from "react-router-dom";
import Admission from "./component/pages/Admisson/Admission";
import OurStudents from "./component/pages/Our students/OurStudents";
// import CustomNavbar from "./component/Navbar/Navbar";
import Home from "./component/pages/Home/Home"
import About from "./component/pages/About/About"
import Health from "./component/pages/Health.js/Health";
function RouteSetting() {
  return (
    <Routes>
      {/* <Route path="/" element={< CustomNavbar/>} /> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/Admission" element={<Admission />} />
      <Route path="/ourstudents" element={<OurStudents />} />
      <Route path="/about" element={<About/>} />
      <Route path="/health" element={<Health/>} />
    </Routes>
  );
}

export default RouteSetting;
