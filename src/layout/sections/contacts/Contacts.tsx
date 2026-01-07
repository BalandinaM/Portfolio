import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle.styled";
import { Button } from "../../../components/button/Button";

export const Contacts = () => {
  return (
    <ContactsSection>
      <SectionTitle>Contacts</SectionTitle>
      <Form>
        <InputWrap>
          <Label htmlFor="name">Name </Label>
          <Field type="text" name="name" id="name" />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="email">Email</Label>
          <Field type="email" name="email" id="email" />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="textarea">Mensaje</Label>
          <Field as={"textarea"} id="textarea" />
        </InputWrap>
        <Button type="submit">Submit</Button>
      </Form>
    </ContactsSection>
  );
};

const ContactsSection = styled.section`
  width: 1200px;
  margin: 0 auto;
  background-color: #fcffd7;
`;

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
`;
const Label = styled.label``;

const Field = styled.input``;

