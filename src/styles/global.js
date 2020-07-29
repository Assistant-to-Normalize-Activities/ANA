import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0 0;
    padding: 0 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    font-family: "Raleway", sans-serif;
  }

  body,
  html,
  #root {
    overflow-x: hidden;
    width: 100%;
    min-height: 100%;
    scroll-behavior: smooth;
  }

  li {
    list-style: none
  }
  
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default Global;
