import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle.styled";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";

const SkillsData = [
  {
    iconId: "js",
    name: "java script",
  },
  {
    iconId: "mongodb",
    name: "mongodb",
  },
  {
    iconId: "postgresql",
    name: "postgresql",
  },
  {
    iconId: "jest",
    name: "jest",
  },
  {
    iconId: "express",
    name: "express",
  },
  {
    iconId: "redux",
    name: "redux",
  },
  {
    iconId: "docker",
    name: "docker",
  },
  {
    iconId: "react",
    name: "react",
  },
  {
    iconId: "styledComponents",
    name: "styled components",
  },
  {
    iconId: "reactNative",
    name: "react Native",
  },
  {
    iconId: "ts",
    name: "type script",
  },
  {
    iconId: "git",
    name: "git",
  },
];

export const Skills = () => {
  return (
    <Container>
      <h2>Технологии</h2>
      <FlexWrapper as="ul" wrap="wrap" rowGap="30px" colGap="30px" >
        {SkillsData.map((skill, index) => (
          <Skill key={index} iconId={skill.iconId} name={skill.name} />
        ))}
      </FlexWrapper>
    </Container>
  );
};



// const ListSkills = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
//   justify-content: center;
//   gap: 30px;
// `;
