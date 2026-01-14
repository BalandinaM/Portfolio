import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper.styled";

type SkillPropsType = {
  iconId: string;
  name: string;
}

export const Skill = (props:SkillPropsType) => {
  return (
    <SkillItem $direction="column" $gap="20px" $align="center">
      <Icon iconId={props.iconId}/>
      <Text>{props.name}</Text>
      {/* Добавить ссылку на гитхаб и гитхабпейджс */}
    </SkillItem>
  );
};

const SkillItem = styled(FlexWrapper)`
  padding: 30px;
`

const Text = styled.span`
  font-size: 16px;
  text-transform: uppercase;
`