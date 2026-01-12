import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="flex-end" >
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
  /* padding: 38px 0; */
  padding-top: 20px;
`

const Logo = styled.div`
  margin-right: auto;
  display: flex;

  a {
    margin: auto;
  }
`;