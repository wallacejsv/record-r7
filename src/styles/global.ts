import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #FFFFFF;;
    --background-grey: #DEE0E3;
    --page-background: #f4f5f6;

    --black: #000;
    --white: #fff;

    --error: #CE2F23;

    --focus: #9CA2AB;
    --disabled: #DEE0E3;
    --button-disabled: #868d98

    --mobile-m: 576px;
    --tablet: 768;
    --desktop-s: 992px;
    --desktop-m: 1200px;

    --new-background: #f4f5f6;
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    background: var(--new-background);
  }

  body, button {
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    border: none;
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }
`
