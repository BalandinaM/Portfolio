import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper.styled";
import { Theme } from "../../../../styles/Theme";

const Item = styled(FlexWrapper)`
  max-width: 522px;
  box-shadow: ${Theme.boxShadow.projectCard};

  @media ${Theme.media.tablet} {
    width: 400px;
    gap: 0;
  }
`;

const Image = styled.img`
  max-width: 522px;
  height: 388px;
  object-fit: cover;

  @media ${Theme.media.tablet} {
    width: 400px;
  }
`;

const WrapContent = styled(FlexWrapper)`
  padding: 30px;

  @media ${Theme.media.mobile} {
    padding: 17px;
  }
`;

const Title = styled.h3`
  text-transform: uppercase;
`;

// const TechStack = styled.ul`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   gap: 10px;
//   padding: 0;
// `;

const TechStackItem = styled.li`
  padding: 8px 16px;
  /* background-color: ${Theme.colors.primary}; */
  background: ${Theme.gradient.gradientOpacity};
  border-radius: ${Theme.borderRadius.borderRadius};
  color: ${Theme.colors.buttonText};
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const LinkItem = styled.li`
  text-transform: uppercase;
  font-weight: 500;
`

export const S = {
  Item,
  Image,
  WrapContent,
  Title,
  // TechStack,
  TechStackItem,
  Text,
  LinkItem
};
