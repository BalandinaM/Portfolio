import Avatar from "../../../assets/avatar.svg";
import { Button } from "../../../components/button/Button";
import { S } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <S.MainSection id="home">
      <S.MainContainer>
        <S.MainFlexWrapper $align="center" $justify="center">
          <S.ContentWrap
            $direction="column"
            $rowgap="20px"
            $align="flex-start"
            $justify="center"
          >
            <h1>Front-end разработчик</h1>
            <S.Name>Баландина Марина</S.Name>
            <S.Text>
              По крайней мере, я не заслуживаю того, чтобы меня бросили... Это
              заноза в заднице. Это самая худшая работа, которую я когда-либо
              выполнял. В результате появляются физические упражнения.
            </S.Text>
            <Button>Связаться со мной</Button>
          </S.ContentWrap>
          <S.Image src={Avatar} alt="Аватар" />
          <S.ScrollButton />
          {/* По нажатию на эту кнопочку секция должна проматываться на следующую секцию */}
        </S.MainFlexWrapper>
      </S.MainContainer>
    </S.MainSection>
  );
};
