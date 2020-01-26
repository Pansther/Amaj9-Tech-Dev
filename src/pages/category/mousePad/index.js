import React from 'react';

import ProductList from '../../../component/productList/index.js';

import {mousePadProduct} from './product.js';

class MousePad extends React.Component {
  render () {
    //console.log(mouseProduct);
    return (
      <ProductList name={'Mouse-pad'} productDataList={mousePadProduct} type="mousepad"/>
    );
  }
}

export default MousePad;
