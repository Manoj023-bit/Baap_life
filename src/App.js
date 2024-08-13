import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouteSetting from './route';
import CustomNavbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import ScrollToTop from './component/pages/ScrollToTop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <CustomNavbar />
        <RouteSetting />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
