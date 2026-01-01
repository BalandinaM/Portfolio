import styled from "styled-components"

export const Menu = () => {
    return (
        <NavMenu>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </NavMenu>
    )
}

const NavMenu = styled.nav`
    ul {
        margin: 0;
        padding: 20px;
        display: flex;
        gap: 40px;

        li:first-child {
            margin-right: auto;
        }
    }
`