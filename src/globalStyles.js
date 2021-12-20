import { createGlobalStyle } from 'styled-components';
import colors from 'design/colors';

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
        background-color: ${colors.background};
    }

    input, label {
        display: block;
    }
`;

export default GlobalStyle;
