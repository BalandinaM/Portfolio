import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

const Title = styled.h2`
  padding-left: 20px;

  @media ${Theme.media.mobile} {
    margin-bottom: 20px;
  }
`;

const Text = styled.p`
  padding-left: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: ${Theme.gradient.gradient};
    border-radius: 5px;

    @media ${Theme.media.mobile} {
      height: 33.3%;
    }
  }
`;

export const S = {
  Title,
  Text,
};
