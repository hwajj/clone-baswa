import styled from "styled-components";

const DropdownSubmenuContainer = styled.div`
  z-index: 1000;
  position: absolute;
  top: 90%;
  width: 267%;
  display: ${(props) => props.show};
  border: 1px solid yellow;
  box-shadow: 3px 1px 25px -3px rgba(61, 61, 61, 0.75);
`;

const DropdownSubmenuList = styled.div`
  height: 100%;
  border-bottom: 1px solid #d5c1b4;
  background: white;
  width: 100%;

  & > a {
    width: 100%;
    display: block;
    padding: 0.7rem;
    height: 100%;
    transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex; /* CSS3 */
    align-items: center; /* Vertical align */
    justify-content: flex-start; /* Horizontal align */
  }
  & > a:hover {
    background-color: #f1e4dc;
  }
`;

export { DropdownSubmenuContainer, DropdownSubmenuList };
