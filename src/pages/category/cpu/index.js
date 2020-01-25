import React from 'react';

import ProductList from '../../../component/productList/index.js';

import {cpuProduct} from './product.js';

class CPU extends React.Component {
  render () {
    //console.log(mouseProduct);
    return (
      <ProductList name={'CPU'} productDataList={cpuProduct}/>
    );
  }
}

export default CPU;
