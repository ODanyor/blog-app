import { createGlobalStyle } from "styled-components";
import { font, color } from "shared/utils/styles";

export default createGlobalStyle`
  *, *:after, *:before, input[type="search"] {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  };

  :root {
    --speed: 200ms;
    
    /* Filters */
    --darker: 0.9;
    --lighter: 1.1;
    --border: 1px solid ${color.backgroundLightPrimary};
  }
  
  body {
    ${font.size(16)};
    ${font.regular};
    background-color: ${color.backgroundLightest}
  };

  ul {
    list-style: none;
  }

  input {
    border: none;
    background: none;
  }

  button {
    border: none;
  }
`;
