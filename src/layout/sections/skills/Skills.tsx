import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles";

export type SkillProps = {
  iconId: string;
  name: string;
}

const SkillsData: SkillProps[] = [
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

export const Skills: React.FC = () => {
  return (
    <section>
      <Container>
        <h2>Технологии</h2>
        <S.Wrap as="ul" $wrap="wrap" $gap="30px" $justify="center">
          {SkillsData.map((skill, index) => (
            <Skill key={index} iconId={skill.iconId} name={skill.name} />
          ))}
        </S.Wrap>
      </Container>
    </section>
  );
};

