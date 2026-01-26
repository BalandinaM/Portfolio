import { FlexWrapper } from "../../../components/FlexWrapper.styled";
import { MenuItem } from "../Header";
import { S } from "../Header_Styles";

type DesktopMenuProps = {
  menuItems: MenuItem[],
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({menuItems}) => {
  return (
    <nav>
      <FlexWrapper as="ul" $justify="center" $colgap="30px">
        {menuItems.map((item, index) => (
          <li key={index}>
            <S.NavLink
            activeClass="active" 
            to={item.href}
            smooth={true}
            // duration={500}
            offset={-120}
            spy={true}
            >{item.name}</S.NavLink>
          </li>
        ))}
      </FlexWrapper>
    </nav>
  );
};

