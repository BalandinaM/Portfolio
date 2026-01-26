import styled from "styled-components";
import { Theme } from "../../styles/Theme";

type ButtonProps = {
    transform?: string;
}

export const Button = styled.button<ButtonProps>`
    background: ${Theme.gradient.gradient};
    box-shadow: ${Theme.gradient.gradientShadow};
    color: ${Theme.colors.buttonText};
    text-transform: ${props => props.transform || ""};
    transition: transform ${Theme.animations.transition};

    &:hover {
        transform: scale(1.02);
    }
`

