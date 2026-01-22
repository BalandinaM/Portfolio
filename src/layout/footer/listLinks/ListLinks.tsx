import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { Theme } from "../../../styles/Theme";

const ContactsData = [
  {
    id: 1,
    href: "#",
    iconId: "gmail",
    iconWidth: "38px",
    iconHeight: "38px",
    iconViewBox: "0 0 38 38",
    text: "Gmail",
  },
  {
    id: 2,
    href: "#",
    iconId: "linkedin",
    iconWidth: "38px",
    iconHeight: "38px",
    iconViewBox: "0 0 38 38",
    text: "Linkedin",
  },
  {
    id: 3,
    href: "#",
    iconId: "github",
    iconWidth: "38px",
    iconHeight: "38px",
    iconViewBox: "0 0 38 38",
    text: "Github",
  },
];

export const ListLinks = () => {
  return (
    <ListLinksStyled>
      {ContactsData.map((contact) => (
        <li key={contact.id}>
          <Link href={contact.href}>
            <Icon
              iconId={contact.iconId}
              width={contact.iconWidth}
              height={contact.iconHeight}
              viewBox={contact.iconViewBox}
            />
            <Text>{contact.text}</Text>
          </Link>
        </li>
      ))}
    </ListLinksStyled>
  );
};

const ListLinksStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;
`;

const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0;

  &:hover {
    background: transparent;
    box-shadow: none;
    border-radius: 0;

    & svg {
      transform: scale(1.2);
    }

    & span {
      color: ${Theme.colors.text};
      transform: scale(1.2);
    }
  }
`;

const Text = styled.span`
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;
