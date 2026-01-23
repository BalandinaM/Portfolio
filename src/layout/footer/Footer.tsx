import { ListLinks } from "./listLinks/ListLinks";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper.styled";
import { S } from "./Footer_Styled";

export const Footer: React.FC = () => {
  return (
    <S.StyledFooter>
      <Container>
        <FlexWrapper $direction="column" $align="center" $rowgap="50px">
          <ListLinks />
          <S.Copyright>WEB DEVELOPER 2026</S.Copyright>
        </FlexWrapper>
      </Container>
    </S.StyledFooter>
  );
};
