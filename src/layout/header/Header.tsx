import { DesktopMenu } from "./menu/DesktopMenu";
import { Container } from "../../components/Container";
import { useState } from "react";
import Logo from "../../components/logo/Logo";
import { MobileMenu } from "./menu/MobileMenu";
import { S } from "./Header_Styles";
import React from "react";

export type MenuItem = {
  name: string;
  href: string;
};

const menuItems: MenuItem[] = [
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

export const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1120;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <S.Header>
      <Container>
        <S.BurgerButton onClick={() => setIsOpenMenu((prev) => !prev)}>
          <span></span>
        </S.BurgerButton>
        <S.HeaderWrap $justify="flex-end" $align="center">
          <Logo />
          {width < breakpoint ? (
            <MobileMenu menuItems={menuItems} isOpen={isOpenMenu} />
          ) : (
            <DesktopMenu menuItems={menuItems} />
          )}
        </S.HeaderWrap>
      </Container>
    </S.Header>
  );
};
