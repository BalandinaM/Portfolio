import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle/SectionTitle.styled";
import { Project } from "./project/Project";
import imgProject from "../../../assets/image.png"

export const Projects = () => {
  return (
    <ProjectsSection>
      <SectionTitle>Projects</SectionTitle>
      <ListProjects>
        <Project
            srcImg={imgProject}
            title={"Title Project"}
            stack={["js", "postgresql", "react", "redux"]}
            text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
        />
        <Project
            srcImg={imgProject}
            title={"Title Project"}
            stack={["js", "postgresql", "react", "redux"]}
            text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
        />
        <Project
            srcImg={imgProject}
            title={"Title Project"}
            stack={["js", "postgresql", "react", "redux"]}
            text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
        />
        <Project
            srcImg={imgProject}
            title={"Title Project"}
            stack={["js", "postgresql", "react", "redux"]}
            text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
        />
      </ListProjects>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  width: 1200px;
  margin: 0 auto;
  background-color: #c8f7f0;
`;

const ListProjects = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  row-gap: 15px;
  column-gap: 30px;
  padding: 0;
`;
