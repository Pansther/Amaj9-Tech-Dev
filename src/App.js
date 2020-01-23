import React from 'react';
import './App.css';

import {
  BrowserRouter,
} from "react-router-dom";

/// components
import Navbar from './component/navbar/index.js';
import MyRoute from './component/route/index.js'; 
import Footer from './component/footer/index.js';

/// css
import './css/mainStyle.css';

function App() {
  return (
    <div className="Main">

      <BrowserRouter>

        <Navbar/>
        <MyRoute/>
        <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
