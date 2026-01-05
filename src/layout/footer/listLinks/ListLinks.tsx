import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon"

export const ListLinks = () => {
  return (
    <ListLinksStyled>
        <li>
            <Link href="#">
                <Icon iconId="gmail" width="38px" height="38px" viewBox="0 0 38 38"/>
                <span>Gmail</span>
            </Link>
        </li>
        <li>
            <Link href="#">
                <Icon iconId="linkedin" width="38px" height="38px" viewBox="0 0 38 38"/>
                <span>Linkedin</span>
            </Link>
        </li>
        <li>
            <Link href="#">
                <Icon iconId="github" width="38px" height="38px" viewBox="0 0 38 38"/>
                <span>Github</span>
            </Link>
        </li>
    </ListLinksStyled>
  )
}

const ListLinksStyled = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
  list-style: none;
`;

const Link = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`