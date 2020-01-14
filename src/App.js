import React from 'react';
import './App.css';

/// components
import Navbar from './component/navbar/index.js';
import MyRoute from './component/route/index.js';

/// css
import './css/mainStyle.css';

function App() {
  return (
    <div className="Main">
      <Navbar />
      <MyRoute />
    </div>
  );
}

export default App;
