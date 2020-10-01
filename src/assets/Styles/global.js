import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  *{
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;

    &:focus {
      outline: 0;
    }
  }

  html, body, #root {
    min-height: 100vh;
    overflow-x: hidden;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font: 16px sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
