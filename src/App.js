import React from 'react'
import { BrowserRouter } from "react-router-dom";
import RouteSetting from './route';
import CustomNavbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer'
function App() {
  return (
    <div>
      
<BrowserRouter>
<CustomNavbar/>

<RouteSetting/>
<Footer/>
</BrowserRouter>
{/* <Admission/> */}

    </div>
  )
}

export default App