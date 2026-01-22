import styled from "styled-components";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import { Theme } from "../../styles/Theme";
import { useState } from "react";
import Logo from "../../components/logo/Logo";
import { MobileMenu } from "../../components/menu/MobileMenu";

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <StyledHeader>
      <Container>
        <BurgerButton onClick={() => setIsOpenMenu((prev) => !prev)}>
          <span></span>
        </BurgerButton>
        <HeaderFlexWrapper $justify="flex-end" $align="center">
          <Logo />
          <Menu />
          <MobileMenu isOpen={isOpenMenu} />
        </HeaderFlexWrapper>
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
`;

const HeaderFlexWrapper = styled(FlexWrapper)`
  @media ${Theme.media.tablet} {
    flex-direction: column;
    justify-content: center;
    gap: 60px;
  }

  & > *:first-child {
    margin-right: auto;

    @media ${Theme.media.tablet} {
      align-self: flex-start;
      margin-left: 25px;
    }
  }
`;

const BurgerButton = styled.button`
  @media ${Theme.media.maxTablet} {
    display: none;
  }

  position: fixed;
  top: 25px;
  right: 25px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    display: block;
    width: 40px;
    height: 3px;
    border-radius: 5px;
    background: ${Theme.gradient.gradient};
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 40px;
      height: 3px;
      border-radius: 5px;
      background: ${Theme.gradient.gradient};
      transform: translateY(-10px);
    }

    &::after {
      content: "";
      display: block;
      width: 28px;
      height: 3px;
      border-radius: 5px;
      background: ${Theme.gradient.gradient};
      position: absolute;
      right: 0;
      transform: translateY(7px);
    }
  }
`;
