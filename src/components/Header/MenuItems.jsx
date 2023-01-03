import React from 'react';
import { HEADER_MENU_TYPE } from '../../utils/constant';
import Dropdown from './Dropdown';

import { AiFillCaretDown } from 'react-icons/ai';
const MenuItems = ({ items }) => {
  return (
    <li className='menu-items'>
      {items.submenu ? (
        <>
          <span
            className={
              items.mode === HEADER_MENU_TYPE.MODAL
                ? 'modal'
                : items.mode === HEADER_MENU_TYPE.LANGUAGE
                ? 'language'
                : ''
            }
            aria-haspopup='menu'
          >
            {items.title}{' '}
          </span>
          {items.mode === HEADER_MENU_TYPE.LANGUAGE && <AiFillCaretDown />}
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
