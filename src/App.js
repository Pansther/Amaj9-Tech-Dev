import React from 'react';
import './App.css';
import Test from './test.js';

import Navbar from './component/navbar/index.js';

function App() {
  return (
    <div className="Main">
      <Navbar />
      <Test />
    </div>
  );
}

export default App;
