import styled from "styled-components";
import { Title } from "../../../components/title/Title.styled"
import { Skill } from "./skill/skill";

export const Skills = () => {
  return (
    <SkillsSection>
      <Title>Skills</Title>
      <ListSkills>
        <Skill iconId="js" name="java script"/>
        <Skill iconId="mongodb" name="mongodb"/>
        <Skill iconId="postgresql" name="postgresql"/>
        <Skill iconId="jest" name="jest"/>
        <Skill iconId="express" name="express"/>
        <Skill iconId="redux" name="redux"/>
        <Skill iconId="docker" name="docker"/>
        <Skill iconId="react" name="react"/>
      </ListSkills>
    </SkillsSection>
  );
}

const SkillsSection = styled.section`
    width: 1200px;
    margin: 0 auto;
    background-color: antiquewhite;
`;

const ListSkills = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
`
