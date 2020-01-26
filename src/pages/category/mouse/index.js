import React from 'react';

import ProductList from '../../../component/productList/index.js';

import {mouseProduct, type} from './product.js';

class Mouse extends React.Component {
  render () {
    //console.log(mouseProduct);
    return (
      <ProductList name={'Mouse'} productDataList={mouseProduct} type={type}/>
    );
  }
}

export default Mouse;
