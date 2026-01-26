import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";
import { font } from "./Common";

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
        min-width: 320px;
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

        padding: 0 25px;
    }

    h1 {
        ${font({ family: "'Tinos', sans-serif", Fmin: 16, Fmax: 20 })}
        text-transform: uppercase;
    }

    h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 26px;
        color: ${Theme.colors.title};
        margin-bottom: 30px;
        text-shadow: ${Theme.boxShadow.text};
    }

    h3 {
        font-weight: 600;
        font-size: 20px;
        color: ${Theme.colors.title}
    }

    a {
        text-decoration: none;
        color: inherit;
        display: block;
        padding: 12px 20px;
        font-size: 16px;
        border: none;
        border-radius: ${Theme.borderRadius.borderRadius};
        transition: all ${Theme.animations.transition};

        &:hover, &:active {
            background: ${Theme.gradient.gradient};
            box-shadow: ${Theme.gradient.gradientShadow};
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
        border-radius: ${Theme.borderRadius.borderRadius};
        padding: 16px 24px;
        font-size: 16px;
        font-weight: 500;
    }

    section {
        padding: 70px 0;

        @media ${Theme.media.tablet} {
           padding: 60px 0;
        }

        @media ${Theme.media.mobile} {
           padding: 50px 0;
        }
    }


    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;
