import styled from "styled-components"
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle.styled"
import { Container } from "../../../components/Container"
import { Theme } from "../../../styles/Theme"

export const About = () => {
  return (
    <Container>
        <Title>Обо мне</Title>
        <Text>Длинный курган был построен на земле, ранее заселенной в эпоху мезолита. Он состоял из земляного кургана прямоугольной формы, длина которого, по оценкам, составляла 15 метров (50 футов), с помещением, построенным из сарсеновых мегалитов на его восточном конце. В эпоху неолита в эту камеру помещали как погребенные, так и кремированные человеческие останки, представляющие собой по меньшей мере девять или десять особей.</Text>
    </Container>
  )
}

const Title = styled.h2`
  padding-left: 20px;
`

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
    background-color: ${Theme.colors.primary};
    border-radius: 5px;
  }
`