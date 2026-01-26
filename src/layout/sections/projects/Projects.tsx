import { Project } from "./project/Project";
import imgProject from "../../../assets/image.png"
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import React from "react";

const ProjectsData = [
  {
    srcImg: imgProject,
    title: "Название проекта",
    stack: ["js", "postgresql", "react", "redux"],
    text: "Я не заслуживаю того, чтобы стать худшим кошмаром, который я когда-либо видел. Это самая худшая работа, которую я когда-либо выполнял. Упражнение приходит как следствие Нострадамуса.",
    hrefCode: "#",
    demo: "#"
  },
  {
    srcImg: imgProject,
    title: "Название проекта",
    stack: ["js", "postgresql", "react", "redux"],
    text: "Я не заслуживаю того, чтобы стать худшим кошмаром, который я когда-либо видел. Это самая худшая работа, которую я когда-либо выполнял. Упражнение приходит как следствие Нострадамуса.",
    hrefCode: "#",
    demo: "#"
  },
  {
    srcImg: imgProject,
    title: "Название проекта",
    stack: ["js", "postgresql", "react", "redux"],
    text: "Я не заслуживаю того, чтобы стать худшим кошмаром, который я когда-либо видел. Это самая худшая работа, которую я когда-либо выполнял. Упражнение приходит как следствие Нострадамуса.",
    hrefCode: "#",
    demo: "#"
  },
  {
    srcImg: imgProject,
    title: "Название проекта",
    stack: ["js", "postgresql", "react", "redux"],
    text: "Я не заслуживаю того, чтобы стать худшим кошмаром, который я когда-либо видел. Это самая худшая работа, которую я когда-либо выполнял. Упражнение приходит как следствие Нострадамуса.",
    hrefCode: "#",
    demo: "#"
  },
]

export const Projects: React.FC = () => {
  return (
    <section id="projects">
      <Container>
        <h2>Проекты</h2>
        <FlexWrapper as="ul" $wrap="wrap" $colgap="30px" $rowgap="15px" $justify="center">
          {ProjectsData.map((project, index) => (
            <Project
              key={index}
              srcImg={project.srcImg}
              title={project.title}
              stack={project.stack}
              text={project.text}
              hrefCode={project.hrefCode}
              demo={project.demo}
            />
          ))}
        </FlexWrapper>
      </Container>
    </section>
  );
};
