import React from 'react';

import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import { navRoute } from './navRoute.js';
import CreateRoute from './createRoute.js';

/// pages
import Home from '../../pages/home/index.js';
import NotFoundPage from '../../pages/notfound/index.js';
import {sink} from '../../pages/home/bestseller.js'
import {product} from '../../pages/home/data.js';
import {mouseProduct} from '../../pages/category/mouse/product.js';
import Sinkha from '../../pages/home/sinkha.js';
/*
{
  categoryRoute.map(cate => (
    <CreateRoute key={cate.id} path={cate.path} component={cate.component} />
  ))
}
*/

class MyRoute extends React.Component {

  render () {
    const getPath = (props) =>{
      console.log(this.props.location);
      return this.props.location;
    }
    return (
      <div>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />

        {
          navRoute.map(nav => (
            <CreateRoute key={nav.id} path={nav.path} component={nav.component} />
          ))
        }
        {
          mouseProduct.map(products =>(
            <Route path={`/product/${products.id}`} component={(props) => <Sinkha {...props} product={products} />} />
          ))
        }

        <Route component={NotFoundPage} />
      </Switch>
      
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />

          {
            navRoute.map(nav => (
              <CreateRoute key={nav.id} path={nav.path} component={nav.component} />
            ))
          }

          <Route component={NotFoundPage} />
      </Switch>
      </div>
    );
  }

}

export default MyRoute;
