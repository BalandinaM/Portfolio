import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  name: string;
}

export const Skill = (props:SkillPropsType) => {
  return (
    <SkillItem>
      <Icon iconId={props.iconId}/>
      <span>{props.name}</span>
    </SkillItem>
  );
};

const SkillItem = styled.li`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`