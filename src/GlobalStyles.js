import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
      --color-light: hsl(252, 30%, 95%);
      --color-gray: hsl(253, 15%, 65%);
      --color-primary: hsl(252, 75%, 60%);
      --color-secondary: hsl(252, 100%, 90%);
      --color-success: hsl(120, 95%, 65%);
      --color-danger: hsl(0, 95%, 65%);
      --color-dark: hsl(252, 30%, 17%);
      --color-black: hsl(252, 30%, 10%);
    
      --border-radius: 2rem;
      --card-border-radius: 1rem;
      --btn-padding: 0.6rem;
      --search-padding: 0.6rem 1rem;
      --card-padding: 1rem;
      --sticky-top-left: 5.4rem;
      --sticky-top-right: -18rem;
    }
    .container {
      width: 80%;
      margin: 0 auto;
    }
    img {
      display: block;
      width: 100%;
    }
`;

export default GlobalStyle;