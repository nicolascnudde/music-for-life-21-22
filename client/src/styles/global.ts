import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    min-height: 100%;
    scroll-behavior: smooth;
  }

  body {
    background: #111;
    background-image: url('/assets/background_mfl.png');
    background-size: 100%;
    background-position: top;
    background-repeat: repeat-y;
    color: #fff;
    font-family: "Readex Pro", "Open Sans", sans-serif;
  }

  h1 {
    font-family: 'Comforter Brush';
    font-size: 8rem; 
    line-height: 1;
  }

  /* text looked huge */
  h2, h3, h4, h5, h6{
      line-height: 1.2;
  }
  }

  h2 {
    font-size: 2.441rem;

  }

  h3 {
      font-size: 1.953rem;
  }
  h4 {
    font-size: 1.353rem;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  p {
    line-height: 1.5;
  }

  small {
    font-size: 0.8rem;
  }

  image {
    width: 100%;
    max-width: 100;
  }
`;
