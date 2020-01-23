import React from 'react';

import ProductList from '../../../component/productList/index.js';

import {ssdProduct} from './product.js';

class SSD extends React.Component {
  render () {
    //console.log(mouseProduct);
    return (
      <ProductList name={'SSD'} productDataList={ssdProduct}/>
    );
  }
}

export default SSD;
