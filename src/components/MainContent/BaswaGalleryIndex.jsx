import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  DropdownSubmenuContainer,
  DropdownSubmenuList,
} from 'components/StyledComponent/DropdownSubmenu';

const BaswaGalleryIndex = ({ data, index }) => {
  const [dropdown, setDropdown] = useState(false);

  const number = String(index + 1).padStart(2, '0');

  const dispatch = useDispatch();

  let listRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        listRef.current &&
        !listRef.current.contains(event.target)
      ) {
        console.log(listRef.current);
        console.log(event.target);
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown((state) => !state);
    console.log(dropdown);
  };

  return (
    <div className='menu-container' ref={listRef} onClick={onMouseEnter}>
      <div className='menu'>
        <h2>{number}</h2>
        <h3>{data.title}</h3>
        <span data-arrow={`${dropdown ? '\u2191' : '\u2193'}`}>
          please select{' '}
        </span>
      </div>
      <DropdownSubmenuContainer
        className={`submenu-container ${dropdown ? 'show' : ''}`}
      >
        {data.select.map((submenu, index) => (
          <DropdownSubmenuList key={index}>
            <a href={submenu.url}>{submenu}</a>
          </DropdownSubmenuList>
        ))}
      </DropdownSubmenuContainer>
    </div>
  );
};

export default BaswaGalleryIndex;
