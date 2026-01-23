import styled from "styled-components"
import { Theme } from "../../styles/Theme";

const StyledFooter = styled.footer`
  padding:70px 0;
`

const Copyright = styled.span`
  text-transform: uppercase;
`

const ListLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0;

  &:hover {
    background: transparent;
    box-shadow: none;
    border-radius: 0;

    & svg {
      transform: scale(1.2);
    }

    & span {
      color: ${Theme.colors.text};
      transform: scale(1.2);
    }
  }
`;

const Text = styled.span`
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;


export const S = {
    StyledFooter,
    Copyright,
    ListLinks,
    Link,
    Text
}