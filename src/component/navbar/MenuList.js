import React from 'react';

class MenuList extends React.Component {

  render () {
    return (
      <span>
        <a href={this.props.href}>{this.props.name}</a>
      </span>
    );
  }

}

export default MenuList;
