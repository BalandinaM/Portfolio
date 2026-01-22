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
    <ProjectItem as="li" $gap="20px" $direction="column">
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

const ProjectItem = styled(FlexWrapper)`
  max-width: 522px;
  box-shadow: ${Theme.boxShadow.projectCard};

  @media ${Theme.media.tablet} {
    width: 400px;
    gap: 0;
  }
`;

const Image = styled.img`
  max-width: 522px;
  height: 388px;
  object-fit: cover;

  @media ${Theme.media.tablet} {
    width: 400px;
  }
`;

const WrapContent = styled(FlexWrapper)`
  padding: 30px;

  @media ${Theme.media.mobile} {
    padding: 17px;
  }
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
  /* background-color: ${Theme.colors.primary}; */
  background: ${Theme.gradient.gradientOpacity};
  border-radius: ${Theme.borderRadius.borderRadius};
  color: ${Theme.colors.buttonText};
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;
const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
`;
