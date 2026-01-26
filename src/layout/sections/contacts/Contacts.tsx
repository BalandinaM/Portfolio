import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import { S } from "./Contacts_Styles";

export const Contacts:React.FC = () => {
  return (
    <section>
      <Container id="contacts">
        <h2>Обратная связь</h2>
        <S.Form>
          <S.InputWrap>
            <S.Label htmlFor="name">Имя</S.Label>
            <S.Field
              type="text"
              name="name"
              id="name"
              placeholder="Иван Иванов"
            />
          </S.InputWrap>
          <S.InputWrap>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Field
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </S.InputWrap>
          <S.InputWrap>
            <S.Label htmlFor="textarea">Сообщение</S.Label>
            <S.TextareaField
              as={"textarea"}
              id="textarea"
              placeholder="Привет!..."
            />
          </S.InputWrap>
          <Button type="submit">Отправить</Button>
        </S.Form>
      </Container>
    </section>
  );
};
