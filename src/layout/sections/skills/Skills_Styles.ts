import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";

const Wrap = styled(FlexWrapper)`
  @media (max-width: 768px) {
    column-gap: 28px;
    row-gap: 60px;
  }
`;

const Item = styled(FlexWrapper)`
  padding: 30px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  svg {
    @media (max-width: 768px) {
      width: 90px;
      height: 90px;
    }
  }
`;

const Text = styled.span`
  font-size: 16px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const S = {
  Wrap,
  Item,
  Text,
};
