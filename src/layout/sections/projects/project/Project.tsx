import styled from "styled-components";
import { Theme } from "../../../../styles/Theme";
import { FlexWrapper } from "../../../../components/FlexWrapper.styled";

type ProjectPropsType = {
  srcImg: string;
  title: string;
  stack: Array<string>;
  text: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <ProjectItem>
      <Image src={props.srcImg} alt={props.title} />
      <WrapContent $direction="column" $gap="15px">
        <ProjectTitle>{props.title}</ProjectTitle>
        <TechStack>
          {props.stack.map((tech, index) => (
            <TechStackItem key={index}>{tech}</TechStackItem>
          ))}
        </TechStack>
        <Text>{props.text}</Text>
      </WrapContent>
    </ProjectItem>
  );
};

const ProjectItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  max-width: 522px;
  box-sizing: border-box;
  box-shadow: ${Theme.boxShadow.projectCard};
`;

const Image = styled.img`
  width: 522px;
  height: 388px;
  object-fit: cover;
`;
const WrapContent = styled(FlexWrapper)`
  padding: 30px;
`;

const ProjectTitle = styled.h3`
  text-transform: uppercase;
`;

const TechStack = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  padding: 0;
`;

const TechStackItem = styled.li`
  padding: 8px 16px;
  background-color: ${Theme.colors.primary};
  border-radius: ${Theme.borderRadius.borderRadius};
  color: ${Theme.colors.buttonText};
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
`;
