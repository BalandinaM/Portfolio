import styled from "styled-components";
import { Theme } from "../../styles/Theme";

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoText>МБ</LogoText>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    ${Theme.colors.primary} 30%,
    #ec615b 100%
  );
  border-radius: 0 50% 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(82, 34, 208, 0.3);
`;

const LogoText = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: ${Theme.colors.background};
  letter-spacing: -2px;
`;

export default Logo;
