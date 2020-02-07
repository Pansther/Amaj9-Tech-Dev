import React from 'react';

import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import {categoryData} from './categoryData.js';

import ProductList from '../../component/productList/index.js';
import Sinkha from '../../pages/home/sinkha.js';
import {allProductItem} from './allProducts/allProductItem.js';

import '../../css/categoryStyle.css';

function ProductDetail(props) {
  let { productId } = useParams();
  return (
    <div className={`${props.name}-product-${productId}`}>
      {
        allProductItem.map((products)=>(
          products.product_data.map((data)=>(
            <Route exact path={`/category/${products.path}/${data.id}`} component={(props) => <Sinkha {...props} key={products.id} product={data}/>} />
          ))
        ))
      }
    </div>
  );
}

function SubCategory(props) {
  let { pathId } = useParams();
  console.log(pathId);
  return (
    <div className={`${pathId}-list`}>
      {
        allProductItem.map(product => (
          <Route exact path={`/category/${product.path}`} component={(props) => <ProductList {...props} productDataList={product.product_data} type={product.path} />} />
        ))
      }
    </div>
  );
}

const NewCategoryList =(props)=> {
  let { url } = useRouteMatch();
  const newAlt = props.name + '-img';
  const productLink = props.href;
  //console.log(`${url}${productLink}`);
  return (
      <div className='list-item'>
        <Link to={`${url}${productLink}`}>
          <div className='img-box'>
            <img className='img-item' src={props.img} alt={newAlt}/>
          </div>

          <div className='text-box'>
            <span className='text-item'>{props.name}</span>
          </div>
        </Link>
      </div>
  );
}

const CategoryMain =()=> {
  return (
    <div className='category-container'>
        <div className='list-box'>
          {
            categoryData.map(item => (
              <NewCategoryList key={item.id} href={item.href} name={item.name} img={item.img} alt={item.alt} />
            ))
          }
      </div>
    </div>
  );
}

const Category =()=> {
  let { path } = useRouteMatch();
  //console.log(path);
  //console.log(url);
  return (
    <Switch>

      {/*
        if don't go to sub-cate, it show category.
        if go to sub-cate, it link to this sub-cate with nested route.
      */}

      <Route exact path={path} component={CategoryMain} />
      <Route exact path={`${path}/:pathId`} component={SubCategory} />

      {
        categoryData.map(cate => (
          <Route exact path={`${path}${cate.href}/:productId`} component={(props) => <ProductDetail {...props} name={cate.name} /> } />
        ))
      }

    </Switch>
  );
}

export default Category;
