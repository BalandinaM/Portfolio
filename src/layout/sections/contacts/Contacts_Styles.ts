import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

const Form = styled.form`
  width: 530px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  Button {
    width: 200px;
  }

  @media ${Theme.media.mobile} {
    width: 100%;
  }
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: "Montserrat", sans-serif;
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
  border-radius: 10px;
  border: 2px solid #5222d0;
  transition: all ${Theme.animations.transition};

  &::placeholder {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
  }

  &:hover {
    background: ${Theme.gradient.gradientInput};
  }
`;

const TextareaField = styled(Field)`
  min-height: 120px;
  min-width: 300px;
  resize: vertical;
`;

export const S = {
    Form,
    InputWrap,
    Label,
    Field,
    TextareaField
}