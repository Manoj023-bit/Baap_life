import React from "react";
import { Routes, Route } from "react-router-dom";
import Admission from "./component/pages/Admisson/Admission";
import OurStudents from "./component/pages/Our students/OurStudents";
// import CustomNavbar from "./component/Navbar/Navbar";
import Home from "./component/pages/Home/Home"
import About from "./component/pages/About/About"
import Sport from "./component/pages/Sport/Sport";
import Health       from "./component/pages/Health/Health";
import './component/i18n/i18n';

function RouteSetting() {
  return (
    <Routes>
      {/* <Route path="/" element={< CustomNavbar/>} /> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/Admission" element={<Admission />} />
      <Route path="/ourstudents" element={<OurStudents />} />
      <Route path="/about" element={<About/>} />
      <Route path="/sports" element={<Sport/>} />
      <Route path="/health" element={<Health/>} />
    </Routes>
  );
}

export default RouteSetting;
