import React from 'react';

import '../../css/navbarStyle.css';

//import logo from '../../img/logo/logo.png';
import {menuData} from './menuData.js';
import MenuList from './MenuList.js';

import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render () {
    //console.log(menuData);
    return (
      <div className='navbar-container'>
        <div className='logo-box'>
          <Link to='/home' id='logo'>Amaj9 Tech</Link>
        </div>
        <div className='menu-box'>
        {
          menuData.map(menu => (
              <MenuList key={menu.id} name={menu.name} href={menu.route}/>
          ))
        } 
        </div>
      </div>
    );
  }
}

export default Navbar;
