import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { ListLinks } from "./listLinks/ListLinks";
import { Container } from "../../components/Container";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <ListLinks />
        <Menu />
        <small>WEB DEVELOPER 2021</small>
      </Container>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background-color: #b6b900b7;
  text-align: center;
`;
