import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper.styled";

export const Menu = () => {
  return (
    <nav>
      <FlexWrapper as="ul" justify="center" colGap="70px">
        <ItemList>
          <a href="#">Проекты</a>
        </ItemList>
        <ItemList>
          <a href="#">Контакты</a>
        </ItemList>
      </FlexWrapper>
    </nav>
  );
};

const ItemList = styled.li`
  /* padding: 12px 20px; */
`
