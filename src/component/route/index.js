import React from 'react';

import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import { navRoute } from './navRoute.js';
import { categoryRoute } from './categoryRoute.js';
import CreateRoute from './createRoute.js';

/// pages
import Home from '../../pages/home/index.js';
import NotFoundPage from '../../pages/notfound/index.js';
import Category from '../../pages/category/index.js';

/*
{
  categoryRoute.map(cate => (
    <CreateRoute key={cate.id} path={cate.path} component={cate.component} />
  ))
}
*/

class MyRoute extends React.Component {

  render () {
    return (
      <Switch>
        <Route exact path="/" component={Home} />

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
