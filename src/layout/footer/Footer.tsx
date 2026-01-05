import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { ListLinks } from "./listLinks/ListLinks";

export const Footer = () => {
  return (
    <FooterStyled>
      <ListLinks />
      <Menu />
      <span>WEB DEVELOPER 2021</span>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  width: 1200px;
  margin: 0 auto;
  padding: 25px;
  box-sizing: border-box;
  background-color: #b6b900b7;
  text-align: center;
`;
