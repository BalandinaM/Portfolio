import styled from "styled-components"

type ProjectPropsType = {
    srcImg: string;
    title: string;
    stack: Array<string>;
    text: string;
}

export const Project = (props: ProjectPropsType) => {
  return (
    <ProjectItem>
        <Image src={props.srcImg} alt={props.title}/>
        <ProjectTitle>{props.title}</ProjectTitle>
        <TechStack>
            {props.stack.map((tech, index) => (
                <TechStackItem key={index}>{tech}</TechStackItem>
            ))}
        </TechStack>
        <Text>{props.text}</Text>
    </ProjectItem>
  )
}

const ProjectItem = styled.li`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 522px;
  box-sizing: border-box;
`;

const Image = styled.img`
    width: 522px;
    height: 388px;
    object-fit: cover;
`
const ProjectTitle = styled.h3`
    color: #00abee;
`

const TechStack = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  padding: 0;
`

const TechStackItem = styled.li`
    padding: 8px 16px;
    background-color: cornflowerblue;
    border-radius: 5px;
    color: white;
`
const Text = styled.p`
    
`