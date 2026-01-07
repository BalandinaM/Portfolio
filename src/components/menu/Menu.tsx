import { Button } from "../button/Button";
import { FlexWrapper } from "../FlexWrapper.styled";

export const Menu = () => {
  return (
    <nav>
      <FlexWrapper as="ul" justify="center" gap="70px">
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <Button as="a" href="#">Contact</Button>
        </li>
      </FlexWrapper>
    </nav>
  );
};
