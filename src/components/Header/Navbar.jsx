import React, { useRef, useState } from 'react';
import '../../scss/components/Header/Navbar.scss';
import { NavLink } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import menuItemInfo from './menuItemInfo';
import MenuItems from './MenuItems';
const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <ul className='menus'>
        {menuItemInfo.map((menu, index) => {
          return <MenuItems items={menu} />;
        })}
      </ul>
      {/* <div className='sample-modal'>
        <NavLink>Order sample</NavLink>
      </div> 
      <div className='language-select'>
        <span>EN</span>
        <AiFillCaretDown />
        <ul className='language-option none'>
          <li>DE</li>
          <li>FR</li>
        </ul>
      </div>*/}
    </div>
  );
};

export default Navbar;
