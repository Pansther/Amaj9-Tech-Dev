import React from 'react';

import ProductList from '../../../component/productList/index.js';

import {hddProduct} from './product.js';

class HDD extends React.Component {
  render () {
    //console.log(mouseProduct);
    return (
      <ProductList name={'HDD'} productDataList={hddProduct}/>
    );
  }
}

export default HDD;
