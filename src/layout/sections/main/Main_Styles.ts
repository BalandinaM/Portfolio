import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { font } from "../../../styles/Common";
import Arrow from "../../../assets/arrow.svg";

const MainSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 90px;

  @media ${Theme.media.tablet} {
    height: auto;
  }
`;

const MainContainer = styled(Container)`
  min-height: auto;
`;

const MainFlexWrapper = styled(FlexWrapper)`
  @media ${Theme.media.tablet} {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 90px;
    gap: 60px;
  }
`;

const ContentWrap = styled(FlexWrapper)`
  height: 100%;
  flex: 1;
  max-width: 600px;

  @media ${Theme.media.tablet} {
    max-width: 100%;
    text-align: center;
    align-items: center;
  }
`;

const Name = styled.h2`
  ${font({ weight: 600, lineHeight: 1, Fmin: 40, Fmax: 72 })}
  background: ${Theme.gradient.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  @media ${Theme.media.tablet} {
    margin-bottom: 15px;
  }

  @media ${Theme.media.mobile} {
    white-space: break-spaces;
  }
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 24px;

  @media ${Theme.media.tablet} {
    text-align: justify;
  }
`;

const Image = styled.img`
  max-width: 533px;
  width: 100%;
  height: 399px;
  object-fit: cover;
  transform: translateX(80px);

  @media ${Theme.media.tablet} {
    transform: none;
  }

  @media ${Theme.media.mobile} {
    width: 319px;
    height: 239px;
  }
`;

const ScrollButton = styled.button`
  width: 50px;
  height: 50px;
  background-size: 32px;
  background-image: url("${Arrow}");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  position: absolute;
  top: 80%;
  transform: translateX(-50%);

  animation: bounce 2s infinite ease-in-out;

  &:hover {
    animation-play-state: paused;
    transform: translateX(-50%);
    background-size: 36px;
  }

  @media ${Theme.media.tablet} {
    display: none;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

export const S = {
    MainSection,
    MainContainer,
    MainFlexWrapper,
    ContentWrap,
    Name,
    Text,
    Image,
    ScrollButton,
}
