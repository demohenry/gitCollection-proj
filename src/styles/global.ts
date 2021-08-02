import { createGlobalStyle } from 'styled-components';

import BackgroundImg from 'assets/background.svg';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }

  @media (max-width: 720px) {
    font-size: 87.5%;
  }

  body {
    background: #f0f0f0 url(${BackgroundImg}) no-repeat 70% top;
    -wekit-font-smoothing: antialiased;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
  }

  button{
    cursor:pointer;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  body, input, textarea, select, button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
}
`;

export default GlobalStyles;
