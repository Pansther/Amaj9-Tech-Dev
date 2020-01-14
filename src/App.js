import React from 'react';
import './App.css';
import Test from './test.js';

import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

/// components
import Navbar from './component/navbar/index.js';

/// pages
import Home from './pages/home/index.js';
import Category from './pages/category/index.js';

/// css
import './css/mainStyle.css';

const NotFoundPage =()=> <h1>NotFoundPage</h1>;

function App() {
  return (
    <div className="Main">
      <Navbar />
      <Test />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/category" component={Category} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
