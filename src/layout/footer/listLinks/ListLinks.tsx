import { Icon } from "../../../components/icon/Icon";
import { S } from "../Footer_Styled";

type ContactProps = {
  id: number;
  href: string;
  iconId: string;
  iconWidth: string;
  iconHeight: string;
  iconViewBox: string;
  text: string;
};

const ContactsData: ContactProps[] = [
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

export const ListLinks: React.FC = () => {
  return (
    <S.ListLinks>
      {ContactsData.map((contact) => (
        <li key={contact.id}>
          <S.Link href={contact.href}>
            <Icon
              iconId={contact.iconId}
              width={contact.iconWidth}
              height={contact.iconHeight}
              viewBox={contact.iconViewBox}
            />
            <S.Text>{contact.text}</S.Text>
          </S.Link>
        </li>
      ))}
    </S.ListLinks>
  );
};
