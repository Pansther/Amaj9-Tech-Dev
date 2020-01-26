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
import {keyboardProduct} from '../../pages/category/keyboard/product.js';
import {ssdProduct} from '../../pages/category/ssd/product.js';
import {mousePadProduct} from '../../pages/category/mousePad/product.js';
import {hddProduct} from '../../pages/category/hdd/product.js';
import {cpuProduct} from '../../pages/category/cpu/product.js';


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
    const item = [
      {
        product_data: mouseProduct,
        path: 'mouse',
      },
      {
        product_data: keyboardProduct,
        path: 'keyboard'
      },
      {
        product_data: ssdProduct,
        path: 'ssd'
      },
      {
        product_data: mousePadProduct,
        path: 'mousepad'
      },
      {
        product_data: cpuProduct,
        path: 'cpu'
      },
      {
        product_data: hddProduct,
        path: 'hdd'
      }
    ]
    return (
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
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />

          {
            navRoute.map(nav => (
              <CreateRoute key={nav.id} path={nav.path} component={nav.component} />
            ))
          }

          <Route component={NotFoundPage} />
      </Switch> */}
      </div>
    );
  }

}

export default MyRoute;
