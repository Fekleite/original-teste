import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    font-size: 60%;

    --color-primary: #DE8F75;
    --color-secondary: #5F75AA;
    --color-complement1: #AEB6C1;
    --color-complement3: #A9095E;
    --color-complement4: #2A5A75;
    --color-black: #000;
    --color-white: #FFF;
    --color-sucess: #32917B;
    --color-gray: #F2F2F2;
    --color-gray-dark: #EBEBEB;
    --color-gray-light: #E3E3E3;
    --color-gray-lighter: #CCC;
    --color-gray-complement1: #ADADAD;
    --color-gray-complement2: #7F7F7F;
    --color-gray-text3: #686868;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(---color-white);
  }

  body, input, button{
    font: 400 1.6rem 'Montserrat';
    color: var(--color-gray-text3);
    outline: none;
  }

  @media (min-width: 720px) {
  :root {
    font-size: 62.5%;
  }
}
`;
