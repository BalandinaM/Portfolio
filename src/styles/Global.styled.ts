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
        height: 100vh;
        margin: 0;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-size: 18px;
        line-height: 26px;
        font-weight: 400;
        letter-spacing: 0.04em;
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
        color: ${Theme.colors.title};
        margin-bottom: 30px;
    }

    h3 {
        font-weight: 600;
        font-size: 20px;
        color: ${Theme.colors.title}
    }

    a {
        text-decoration: none;
        color: inherit;
        padding: 12px 20px;
        font-size: 16px;
        border: none;

        &:hover {
            background-color: ${Theme.colors.primary};
            color: ${Theme.colors.buttonText};
            font-weight: 500;
            border-radius: ${Theme.borderRadius.borderRadius};
        }
    }


    ul {
        list-style: none;
    }

    button {
        letter-spacing: 0.04em;
        background-color: unset;
        border: none;
    }


    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;
