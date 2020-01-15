import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import {categoryData} from './categoryData.js';
import CategoryList from './categoryList.js';

import '../../css/categoryStyle.css';

import Home from '../../pages/home/index.js';
import Mouse from '../../pages/category/mouse/index.js';
import MousePad from '../../pages/category/mousePad/index.js';

function SubCategory() {
  let { path } = useParams(); 
  return (
    <div>
      {path === 'mouse' && <Mouse /> }
      {path === 'mouse-pad' && <MousePad /> }
    </div>
  );
}

const NewCategoryList =(props)=> {
  let { path, url } = useRouteMatch();
  const newAlt = props.name + '-img';
  //const productLink = 'category' + this.props.href;
  const productLink = props.href;
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
  //console.log(categoryData);
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Switch>

        <Route exact path={path}>
          <CategoryMain />
        </Route>
        <Route path={`${path}/:path`}>
          <SubCategory />
        </Route>

      </Switch>
    </div>
  );
}

export default Category;
