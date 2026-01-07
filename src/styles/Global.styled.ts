import { createGlobalStyle } from "styled-components";
import { Theme } from './Theme'
export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-size: 18px;
        line-height: 26px;
        letter-spacing: 4%;
        background-color: ${Theme.colors.background};
        color: ${Theme.colors.text};
    }

    h1 {
        font-family: 'Tinos', sans-serif;
        font-weight: 400;
        font-size: 20px;
        text-transform: uppercase;
    }

    h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 26px;
        letter-spacing: 4%;
        color: ${Theme.colors.title}
    }

    h3 {
        font-weight: 600;
        font-size: 20px;
        color: ${Theme.colors.title}
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }


    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;
