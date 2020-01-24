import React from 'react';

import { Link } from 'react-router-dom';

class MenuList extends React.Component {

  render () {
    
    return (
      <span>
        {this.props.isRoute && <Link to={this.props.href}>{this.props.name}</Link>}
        {!this.props.isRoute && <Link to={this.props.isRoute && this.props.href} onClick={() => popup()}>{this.props.name}</Link>}
      </span>
    );
  }

}

function popup(){
  let loginPopup = document.getElementById("login-contain-id");
  loginPopup.style.visibility = "visible";
}

export default MenuList;
