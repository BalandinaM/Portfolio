import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import { Theme } from "../../styles/Theme";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper $justify="flex-end" $align="center">
          <Logo>
            <a href="#">Главная</a>
          </Logo>
          <Menu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  font-size: 16px;
  font-weight: 500;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${Theme.colors.background};
  box-shadow: ${Theme.boxShadow.projectCard};
  z-index: 1000;
`

const Logo = styled.div`
  margin-right: auto;
  display: flex;

  a {
    margin: auto;
  }
`;