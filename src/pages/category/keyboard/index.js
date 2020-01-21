import React from 'react';

import ProductList from '../../../component/productList/index.js';

import {keyboardProduct} from './product.js';

class Keyboard extends React.Component {
  render () {
    //console.log(mouseProduct);
    return (
      <ProductList name={'Keyboard'} productDataList={keyboardProduct}/>
    );
  }
}

export default Keyboard;
