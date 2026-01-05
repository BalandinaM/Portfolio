import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <a href="#">Home</a>
      </Logo>
      <Menu />
    </StyledHeader>
  );
};

const Logo = styled.div`
  margin-right: auto;
  display: flex;

  a {
    margin: auto;
  }
`;
const StyledHeader = styled.header`
  background-color: teal;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;
