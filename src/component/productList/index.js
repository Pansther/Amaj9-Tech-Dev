import React from 'react';

import {categoryData} from '../../pages/category/categoryData.js';

import {
  //Switch,
  //Route,
  Link,
  //useParams,
} from "react-router-dom";

import '../../css/productListStyle.css';

const CategoryBarItem =(props)=> {
  return (
    <Link to={`/category${props.href}`}>{props.name}</Link>
  );
}

const CategoryBar =()=> {
  return (
    <>
      {
        categoryData.map(cate => (
          <CategoryBarItem key={cate.id} name={cate.name} href={cate.href} />
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
      <Link className='img-box' to='#'>
        <img src={props.cover} alt={props.name}/>
      </Link>
      <div className='detail-box'>
        <div className='name'>
          <Link to='#'>{props.name}</Link>
        </div>
        <p className='detail'>{props.detail}</p>
        <div className='add-btn-box'>
          <b><p className='add-btn-'>{`${props.price}.-`}</p></b>
        </div>
      </div>
    </div>
  );
}

class ProductList extends React.Component {

  render () {
    //console.log(this.props.productDataList);
    return (
      <div className='product-box' id={this.props.name}>
        <div className='category-bar'>
          <CategoryBar />
        </div>

        <div className='product-list' id={this.props.name}>
          <div className='product-name' id={this.props.name}>
            <p className='name'>{this.props.name}</p>
          </div>
          <div className='all-product'>
            {
              this.props.productDataList.map(product => (
                <CreateProduct key={product.id} id ={product.id} name={product.name} cover={product.pic.img1} detail={product.detail} price={product.price} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }

}

export default ProductList;
