import React from 'react';

const Dropdown = ({ submenus }) => {
  return (
    <ul className='submenu-container'>
      {submenus.map((submenu, index) => (
        <li key={index} className='submenu-list'>
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
