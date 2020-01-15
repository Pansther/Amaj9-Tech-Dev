import React from 'react';

import { Link } from 'react-router-dom';

class MenuList extends React.Component {

  render () {
    return (
      <span>
        <Link to={this.props.href}>{this.props.name}</Link>
      </span>
    );
  }

}

export default MenuList;
