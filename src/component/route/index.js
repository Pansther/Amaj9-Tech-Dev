import React from 'react';

import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import { navRoute } from './navRoute.js';
import CreateRoute from './createRoute.js';
import ProductList from '../productList/index.js';

/// pages
import Home from '../../pages/home/index.js';
import Category from '../../pages/category/index.js';
import NotFoundPage from '../../pages/notfound/index.js';
import {sink} from '../../pages/home/bestseller.js'


import Sinkha from '../../pages/home/sinkha.js';

class MyRoute extends React.Component {

  render () {
    return (
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />

        {
          navRoute.map(nav => (
            <CreateRoute key={nav.id} path={nav.path} component={nav.component} />
          ))
        }

        <Route component={NotFoundPage} />
      </Switch>
    );
  }

}

export default MyRoute;
