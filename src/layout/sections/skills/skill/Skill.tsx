import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper.styled";

type SkillPropsType = {
  iconId: string;
  name: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <SkillItem $direction="column" $gap="20px" $align="center">
      <Icon iconId={props.iconId} width="120px" height="120px" />
      <Text>{props.name}</Text>
      {/* Добавить ссылку на гитхаб и гитхабпейджс */}
    </SkillItem>
  );
};

const SkillItem = styled(FlexWrapper)`
  padding: 30px;

  @media (max-width: 768px) {
    padding: 10px;
  }

  svg {
    @media (max-width: 768px) {
      width: 90px;
      height: 90px;
    }
  }
`;

const Text = styled.span`
  font-size: 16px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
