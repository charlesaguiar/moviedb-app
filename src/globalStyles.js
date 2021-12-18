import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f8f8f8;
    }

    input, label {
        display: block;
    }
`;

export default GlobalStyle;
