import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:before, *:after {
    border: 0;
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Rubik', sans-serif;
    background-color: #E5E5E5;
    color: #617480;
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
