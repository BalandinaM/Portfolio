import styled from "styled-components";

type FlexWrapperProps = {
  $direction?: string;
  $justify?: string;
  $align?: string;
  $wrap?: string;
  $rowgap?: string;
  $colgap?: string;
  $gap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${props => props.$direction || null};
  justify-content: ${props => props.$justify || null};
  align-items: ${props => props.$align || null};
  flex-wrap: ${props => props.$wrap || null};
  row-gap: ${props => props.$rowgap || null};
  column-gap: ${props => props.$colgap || null};
  gap: ${props => props.$gap || null};
`;
