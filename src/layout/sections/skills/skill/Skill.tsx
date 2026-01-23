import { Icon } from "../../../../components/icon/Icon";
import { S } from "../Skills_Styles";
import type { SkillProps } from "../Skills";

export const Skill: React.FC<SkillProps> = (props: SkillProps) => {
  return (
    <S.Item $direction="column" $gap="20px" $align="center">
      <Icon iconId={props.iconId} width="120px" height="120px" />
      <S.Text>{props.name}</S.Text>
      {/* Добавить ссылку на гитхаб и гитхабпейджс */}
    </S.Item>
  );
};
