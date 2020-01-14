import React from 'react';

class CategoryList extends React.Component {

  render () {
    const newAlt = this.props.name + '-img';
    return (
      <div className='list-item'>
        <img className='list-img' src={this.props.img} alt={newAlt}/>
        {this.props.name}
      </div>
    );
  }

}

export default CategoryList;
