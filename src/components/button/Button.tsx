import styled from "styled-components";
import { Theme } from "../../styles/Theme";

type ButtonProps = {
    transform?: string;
}

export const Button = styled.button<ButtonProps>`
    background-color: ${Theme.colors.primary};
    color: ${Theme.colors.buttonText};
    text-transform: ${props => props.transform || ""};
`

