import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import { Theme } from "../../styles/Theme";
import { Link } from "react-scroll";

const Header = styled.header`
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

const HeaderWrap = styled(FlexWrapper)`
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

const BurgerButton = styled.button<{$isOpen: boolean}>`
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
    transition: transform 0.3s ease;

    &::before {
      content: "";
      display: block;
      width: 40px;
      height: 3px;
      border-radius: 5px;
      background: ${Theme.gradient.gradient};
      transition: transform 0.3s ease;
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(270deg)' : 'translateY(-10px)'};
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
      opacity: ${({ $isOpen }) => $isOpen ? 0 : 1};
      transition: opacity 0.3s ease;
    }

    transform: ${({ $isOpen }) => $isOpen ? 'rotate(-135deg)' : 'rotate(0)'};
  }
`;

const NavMenu = styled.nav<{ $isOpen: boolean }>`
  @media ${Theme.media.tablet} {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  }
`;

const NavWrapper = styled(FlexWrapper)`
  @media ${Theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 40px;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  padding: 12px 20px;
  font-size: 16px;
  border: none;

  &:hover, &.active {
    background: ${Theme.gradient.gradient};
    box-shadow: ${Theme.gradient.gradientShadow};
    color: ${Theme.colors.buttonText};
    font-weight: 500;
    border-radius: ${Theme.borderRadius.borderRadius};
  }
`;

export const S = {
    Header,
    HeaderWrap,
    BurgerButton, 
    NavMenu,
    NavLink,
    NavWrapper
}