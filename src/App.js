import React from 'react'
import { BrowserRouter } from "react-router-dom";
import RouteSetting from './route';
import Admission from './component/pages/Admission';
function App() {
  return (
    <div>
<BrowserRouter>
<RouteSetting/>
</BrowserRouter>
<Admission/>

    </div>
  )
}

export default App