import Avatar from "../../../assets/avatar.svg"
import styled from "styled-components"
import { Button } from "../../../components/button/Button"
import { FlexWrapper } from "../../../components/FlexWrapper.styled"
import { Container } from "../../../components/Container"
import { Theme } from "../../../styles/Theme"
import Arrow from "../../../assets/arrow.svg"

export const Main = () => {
  return (
    <MainSection>
      <MainContainer>
        <FlexWrapper $align="center" $justify="center">
            <ContentWrap $direction="column" $rowgap="20px" $align="flex-start" $justify="center">
                <h1>Front-end разработчик</h1>
                <Name>Баландина Марина</Name>
                <Text>По крайней мере, я не заслуживаю того, чтобы меня бросили... Это заноза в заднице. Это самая худшая работа, которую я когда-либо выполнял. В результате появляются физические упражнения.</Text>
                <Button>Связаться со мной</Button>
            </ContentWrap>
            <Image src={Avatar} alt="Аватар" />
            <ScrollButton />
            {/* По нажатию на эту кнопочку секция должна проматываться на следующую секцию */}
        </FlexWrapper>
      </MainContainer>
    </MainSection>
  )
}

const MainSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const MainContainer = styled(Container)`
  min-height: auto;
`

const ContentWrap = styled(FlexWrapper)`
  height: 100%;
  display: flex;
  flex: 1;
  max-width: 600px;
`

const Name = styled.h2`
  font-size: 72px;
  font-weight: 600;
  line-height: 1;
  color: ${Theme.colors.primary};
`
const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
`

const Image = styled.img`
  width: 533px;
  height: 399px;
  object-fit: cover;
  transform: translateX(80px);
`

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

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`
