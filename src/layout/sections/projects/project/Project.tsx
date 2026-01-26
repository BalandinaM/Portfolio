import { FlexWrapper } from "../../../../components/FlexWrapper.styled";
import { S } from "./Project_Styles";

type ProjectPropsType = {
  srcImg: string;
  title: string;
  stack: Array<string>;
  text: string;
  hrefCode: string;
  demo: string;
};

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
  return (
    <S.Item as="li" $gap="20px" $direction="column">
      <S.Image src={props.srcImg} alt={props.title} />
      <S.WrapContent $direction="column" $gap="15px">
        <S.Title>{props.title}</S.Title>
        <FlexWrapper as="ul" $justify="flex-start" $gap="10px">
          {props.stack.map((tech, index) => (
            <S.TechStackItem key={index}>{tech}</S.TechStackItem>
          ))}
        </FlexWrapper>
        <S.Text>{props.text}</S.Text>
        <FlexWrapper as="ul" $justify="flex-end" $gap="10px">
          <S.LinkItem><a href={props.hrefCode}>code</a></S.LinkItem>
          <S.LinkItem><a href={props.demo}>demo</a></S.LinkItem>
        </FlexWrapper> 
      </S.WrapContent>
    </S.Item>
  );
};
