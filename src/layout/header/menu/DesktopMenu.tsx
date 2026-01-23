import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { MenuItem } from "../Header";

type DesktopMenuProps = {
  menuItems: MenuItem[],
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({menuItems}) => {
  return (
    <nav>
      <FlexWrapper as="ul" $justify="center" $colgap="30px">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </FlexWrapper>
    </nav>
  );
};

