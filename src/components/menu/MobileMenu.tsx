import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper.styled";
import { Theme } from "../../styles/Theme";

const MenuItems = [
  {
    name: "Главная",
    href: "#",
  },
  {
    name: "Обо мне",
    href: "#",
  },
  {
    name: "Проекты",
    href: "#",
  },
  {
    name: "Технологический стек",
    href: "#",
  },
  {
    name: "Контакты",
    href: "#",
  },
];

export const MobileMenu = ({ isOpen }) => {
  return (
    <NavMenu $isOpen={isOpen}>
      <NavWrapper as="ul" $justify="center" $colgap="30px">
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </NavWrapper>
    </NavMenu>
  );
};

const NavMenu = styled.nav<{ $isOpen: boolean }>`
  @media ${Theme.media.maxTablet} {
    display: none;
  }

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
