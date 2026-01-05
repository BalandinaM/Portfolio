import Avatar from "../../../assets/avatar.svg"
import styled from "styled-components"
import { Button } from "../../../components/button/Button"

export const Main = () => {
  return (
    <MainWrap>
        <div>
            <h1>Developer</h1>
            <h2>Erica Font</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.</p>
            <Button>Contact Me</Button>
        </div>
        <Image src={Avatar} alt="Аватар" />
    </MainWrap>
  )
}

const Image = styled.img`
  width: 533px;
  height: 399px;
  object-fit: cover;
`

const MainWrap = styled.div`
  background-color: aquamarine;
  margin: 0 auto;
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`