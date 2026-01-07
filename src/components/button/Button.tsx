import styled from "styled-components";
import { Theme } from "../../styles/Theme";

type ButtonProps = {
    transform?: string;
}

export const Button = styled.button<ButtonProps>`
    padding: 12px 20px;
    background-color: ${Theme.colors.primary};
    color: ${Theme.colors.buttonText};
    text-transform: ${props => props.transform || ""};
    border: none;
    border-radius: 5px;
`

