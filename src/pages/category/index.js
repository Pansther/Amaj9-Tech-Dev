import React from 'react';

import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import {categoryData} from './categoryData.js';
import {categoryRoute} from '../../component/route/categoryRoute.js';

import '../../css/categoryStyle.css';

/// problem solution of return Component instead <Component />
function NewHOC (PassedComponent) {
  return class extends React.Component {
    render() {
      return (
          <PassedComponent {...this.props} />
      )
    }
  }
}

function SubCategory(props) {
  let { pathId } = useParams();
  //console.log(categoryRoute);

  return (
    <div className={pathId}>
      {
        categoryRoute
        .filter(cate => cate.path === `/${pathId}`)
        .map(cate => {
            const NewComponent = NewHOC(cate.component)
            return(<NewComponent key={cate.id}/>)
        })
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

      <Route exact path={path} component={CategoryMain} /> {/*main cate*/}
      <Route path={`${path}/:pathId`} component={SubCategory} /> {/*many sub cate*/}

    </Switch>
  );
}

export default Category;
