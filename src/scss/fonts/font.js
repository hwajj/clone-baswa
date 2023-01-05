import { createGlobalStyle } from "styled-components";

import FlamaBook from "./FlamaBook Regular.otf";

export default createGlobalStyle`
  @font-face {
    font-family: 'FlamaBook';
    font-weight: 200;
    src: url(${FlamaBook}) format('otf')
  }
`;
