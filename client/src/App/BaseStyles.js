import { createGlobalStyle } from "styled-components";
import { font, color } from "../shared/utils/styles";

export default createGlobalStyle`
  *, *:after, *:before, input[type="search"] {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  };

  :root {
    --speed: 200ms;
  }
  
  body {
    ${font.size(16)};
    ${font.regular};
    background-color: ${color.backgroundLightest}
  };

  input {
    border: none;
    background: none;
  }
`;
