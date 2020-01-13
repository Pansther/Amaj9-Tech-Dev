import React from 'react';

import '../../css/navbarStyle.css';

//import logo from '../../img/logo/logo.png';
import {menuData} from './menuData.js';
import MenuList from './MenuList.js';

class Navbar extends React.Component {
  render () {
    //console.log(menuData);
    return (
      <div className='navbar-container'>
        <div className='logo-box'>
          <a href='index.html' id='logo'>Amaj9 Tech</a>
        </div>
        <div className='menu-box'>
          {
            menuData.map(menu => (
              <MenuList key={menu.id} name={menu.name} href={menu.href}/>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Navbar;
