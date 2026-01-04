import styled from "styled-components";

type ButtonProps = {
    transform?: string;
}

export const Button = styled.button<ButtonProps>`
    padding: 12px 20px;
    background-color: blue;
    color: white;
    text-transform: ${props => props.transform || ""};
    border: none;
    border-radius: 5px;
`

