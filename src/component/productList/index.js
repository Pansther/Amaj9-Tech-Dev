import React from 'react';

import {categoryData} from '../../pages/category/categoryData.js';

import {
  //Switch,
  //Route,
  Link,
  //useParams,
  //useRouteMatch,
} from "react-router-dom";

import '../../css/productListStyle.css';

const CategoryBarItem =(props)=> {
  return (
    <Link to='#'>{props.name}</Link>
  );
}

const CategoryBar =()=> {
  return (
    <>
      {
        categoryData.map(cate => (
          <CategoryBarItem key={cate.id} name={cate.name}/>
        ))
      }
    </>
  );
}

const CreateProduct =(props)=> {
  //console.log(props.cover);
  //console.log(props.id); 
  return (
    <div className='product' id={props.id}>
      <img src={props.cover} alt={props.name}/>
    </div>
  );
}

class ProductList extends React.Component {

  render () {
    console.log(this.props.productDataList);
    return (
      <div className='product-box' id={this.props.name}>
        <div className='category-bar'>
          <CategoryBar />
        </div>

        <div className='product-list' id={this.props.name}>
          {
            this.props.productDataList.map(product => (
              <CreateProduct key={product.id} id ={product.id} name={product.name} cover={product.pic.img1}/>
            ))
          }
        </div>
      </div>
    );
  }

}

export default ProductList;
