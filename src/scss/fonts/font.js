import { createGlobalStyle } from "styled-components";
import FlamaBook from "scss/fonts/FlamaBook Regular.otf";
import FlamaBookLight from "scss/fonts/Flama-Light.woff";
import FlamaBookBold from "scss/fonts/Flama-Bold.otf";
export default createGlobalStyle`
  @font-face {
    font-family: 'FlamaBook';
    font-weight: 900;
    src: url(${FlamaBookBold}) format('otf')
  }
  @font-face {
    font-family: 'FlamaBook';
    font-weight: 400;
    src: url(${FlamaBook}) format('otf')
  }

  @font-face {
    font-family: 'FlamaBook';
    font-weight: 300;
    src: url(${FlamaBook}) format('otf')
  }

  @font-face {
    font-family: 'FlamaBook';
    font-weight: 200;
    src: url(${FlamaBook}) format('otf')
  }

  @font-face {
    font-family: 'FlamaBook';
    font-weight: 200;
    src: url(${FlamaBookLight}) format('woff')
  }
`;
