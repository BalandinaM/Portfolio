import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle.styled";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import { Theme } from "../../../styles/Theme";

export const Contacts = () => {
  return (
    <section>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <Form>
          <InputWrap>
            <Label htmlFor="name">Имя</Label>
            <Field type="text" name="name" id="name" placeholder="Иван Иванов"/>
          </InputWrap>
          <InputWrap>
            <Label htmlFor="email">Email</Label>
            <Field type="email" name="email" id="email" placeholder="example@gmail.com"/>
          </InputWrap>
          <InputWrap>
            <Label htmlFor="textarea">Сообщение</Label>
            <TextareaField as={"textarea"} id="textarea" placeholder="Привет!..."/>
          </InputWrap>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </section>
  );
};


const Form = styled.form`
  width: 530px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  Button {
    width: 100%;
  }
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: 'Montserrat', sans-serif;
  
`;
const Label = styled.label`
  text-align: left;
  font-size: 14px;
`;

const Field = styled.input`
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  padding: 15px 18px;
  border-radius: ${Theme.borderRadius.borderRadius};

  &::placeholder {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }
`;

const TextareaField = styled(Field)`
  min-height: 120px;
  min-width: 300px;
  resize: vertical;
`;
