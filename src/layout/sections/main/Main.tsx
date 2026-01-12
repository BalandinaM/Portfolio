import Avatar from "../../../assets/avatar.svg"
import styled from "styled-components"
import { Button } from "../../../components/button/Button"
import { FlexWrapper } from "../../../components/FlexWrapper.styled"
import { Container } from "../../../components/Container"
import { Theme } from "../../../styles/Theme"

//я бы чуть сместила картинку, но хз как. Через бг? тогда как сохранить размер контейнера для текста? Хардкодить ширину?

export const Main = () => {
  return (
    <MainSection>
      <Container>
        <FlexWrapper>
            <FlexWrapper direction="column" justify="flex-start" gap="20px" align="flex-start">
                <Title>Front-end разработчик</Title>
                <Name>Баландина Марина</Name>
                <Text>По крайней мере, я не заслуживаю того, чтобы меня бросили... Это заноза в заднице. Это самая худшая работа, которую я когда-либо выполнял. В результате появляются физические упражнения.</Text>
                <Button>Связаться со мной</Button>
            </FlexWrapper>
            <Image src={Avatar} alt="Аватар" />
        </FlexWrapper>
      </Container>
    </MainSection>
  )
}

const MainSection = styled.section`
  position: relative;
` 

const Title = styled.h1`
  
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
`
