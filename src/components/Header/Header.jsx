import React, { useState, useRef } from 'react';
import logoSvg from '../../assets/logo.svg';
import '../../scss/components/Header/Header.scss';
import { NavLink } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';
import Navbar from './Navbar';
const Header = () => {
  const ulRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClickMenu = (e) => {
    //    console.log(ulRef);
    // console.log(e.target);
    // ulRef.map((li) => {
    //   if (li == e.target) {
    //   }
    // });
  };
  return (
    <header>
      <div className='nav-area'>
        <div className='logo' alt='logo'>
          <NavLink>
            <img src={logoSvg} />
          </NavLink>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
