import { S } from "./Project_Styles";

type ProjectPropsType = {
  srcImg: string;
  title: string;
  stack: Array<string>;
  text: string;
};

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Item as="li" $gap="20px" $direction="column">
      <S.Image src={props.srcImg} alt={props.title} />
      <S.WrapContent $direction="column" $gap="15px">
        <S.Title>{props.title}</S.Title>
        <S.TechStack>
          {props.stack.map((tech, index) => (
            <S.TechStackItem key={index}>{tech}</S.TechStackItem>
          ))}
        </S.TechStack>
        <S.Text>{props.text}</S.Text>
      </S.WrapContent>
    </S.Item>
  );
};
