import React from "react";
import { S } from "../Header_Styles";
import { MenuItem } from "../Header";

type MobileMenuProps = {
  isOpen: boolean;
  menuItems: MenuItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, menuItems }) => {
  console.log(isOpen)
  return (
    <S.NavMenu $isOpen={isOpen}>
      <S.NavWrapper as="ul" $justify="center" $colgap="30px">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </S.NavWrapper>
    </S.NavMenu>
  );
};