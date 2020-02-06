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
<<<<<<< HEAD
      <>
        <Switch>
=======
      <div>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />

        {
          navRoute.map(nav => (
            <CreateRoute key={nav.id} path={nav.path} component={nav.component} />
          ))
        }
        {/* {
          mouseProduct.map(products =>(
            <Route path={`/product/${products.id}`} component={(props) => <Sinkha {...props} product={products} />} />
          ))
        } */}
        {
          item.map((products)=>(
            products.product_data.map((data)=>(
            <Route path={`/shop/${products.path}/${data.id}`} component={(props) => <Sinkha {...props} product={data}/>} />
            ))
          ))
        }

        <Route component={NotFoundPage} />
      </Switch>

        {/* <Switch>
>>>>>>> aae5073860c77d4655ae49cec5668b0b4edb69ef
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />

          {
            navRoute.map(nav => (
              <CreateRoute key={nav.id} path={nav.path} component={nav.component} />
            ))
          }

          <Route component={NotFoundPage} />
        </Switch>
      </>
    );
  }

}

export default MyRoute;
