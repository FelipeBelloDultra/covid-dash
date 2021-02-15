import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:before, *:after {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Rubik', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Rubik', sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    min-height: 100vh;
  }
`;
