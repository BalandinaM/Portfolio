import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper.styled";

const MenuItems = [
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
  }
]

export const Menu = () => {
  return (
    <nav>
      <FlexWrapper as="ul" $justify="center" $colgap="70px">
        {MenuItems.map((item, index) => (
          <ItemList key={index}>
            <a href={item.href}>{item.name}</a>
          </ItemList>
        ))}
      </FlexWrapper>
    </nav>
  );
};

const ItemList = styled.li`
  /* padding: 12px 20px; */
`
