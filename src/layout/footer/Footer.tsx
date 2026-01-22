import styled from "styled-components";
import { ListLinks } from "./listLinks/ListLinks";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper $direction="column" $align="center" $rowgap="50px">
          <ListLinks />
          <Copyright>WEB DEVELOPER 2026</Copyright>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding:70px 0;
`

const Copyright = styled.span`
  text-transform: uppercase;
`