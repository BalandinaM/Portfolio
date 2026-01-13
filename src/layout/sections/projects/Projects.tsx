import { Project } from "./project/Project";
import imgProject from "../../../assets/image.png"
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper.styled";

const ProjectsData = [
  {
    srcImg: imgProject,
    title: "Название проекта",
    stack: ["js", "postgresql", "react", "redux"],
    text: "Я не заслуживаю того, чтобы стать худшим кошмаром, который я когда-либо видел. Это самая худшая работа, которую я когда-либо выполнял. Упражнение приходит как следствие Нострадамуса."
  },
  {
    srcImg: imgProject,
    title: "Название проекта",
    stack: ["js", "postgresql", "react", "redux"],
    text: "Я не заслуживаю того, чтобы стать худшим кошмаром, который я когда-либо видел. Это самая худшая работа, которую я когда-либо выполнял. Упражнение приходит как следствие Нострадамуса."
  },
  {
    srcImg: imgProject,
    title: "Название проекта",
    stack: ["js", "postgresql", "react", "redux"],
    text: "Я не заслуживаю того, чтобы стать худшим кошмаром, который я когда-либо видел. Это самая худшая работа, которую я когда-либо выполнял. Упражнение приходит как следствие Нострадамуса."
  },
  {
    srcImg: imgProject,
    title: "Название проекта",
    stack: ["js", "postgresql", "react", "redux"],
    text: "Я не заслуживаю того, чтобы стать худшим кошмаром, который я когда-либо видел. Это самая худшая работа, которую я когда-либо выполнял. Упражнение приходит как следствие Нострадамуса."
  },
]

export const Projects = () => {
  return (
    <section>
      <Container>
        <h2>Проекты</h2>
        <FlexWrapper as="ul" wrap="wrap" colGap="30px" rowGap="15px">
          {ProjectsData.map((project, index) => (
            <Project
              key={index}
              srcImg={project.srcImg}
              title={project.title}
              stack={project.stack}
              text={project.text}
            />
          ))}
        </FlexWrapper>
      </Container>
    </section>
  );
};
