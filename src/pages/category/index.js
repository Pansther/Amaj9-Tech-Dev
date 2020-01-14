import React from 'react';

import {categoryData} from './categoryData.js';
import CategoryList from './categoryList.js';

import '../../css/categoryStyle.css';

class Category extends React.Component {

  render () {
    //console.log(categoryData);
    return (
      <div className='category-container'>
        Hello, Category!

        <div className='list-box'>
          {
            categoryData.map(item => (
              <CategoryList key={item.id} name={item.name} img={item.img} alt={item.alt} />
            ))
          }
        </div>

      </div>
    );
  }

}

export default Category;
