import styled from "styled-components";
import { color, sizes, font } from "../../../shared/utils/styles";

export const Navbar = styled.div`
  padding: 0 15px;
  position: fixed;
  width: 100%;
  height: ${sizes.navbarHeight}px;
  background-color: ${color.backgroundLightPrimary};
`;

export const NavbarItems = styled.div`
  margin: 0 auto;
  max-width: ${sizes.navbarWidth}px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarSideItems = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: ${({ rightSideItems }) =>
    rightSideItems ? "flex-end" : "flex-start"};
  @media screen and (max-width: 990px) {
    & {
      display: ${({ rightSideItems }) => (rightSideItems ? "none" : "flex")};
    }
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const BurgerMenuItems = styled.ul`
  margin: 5px 0;
  background-color: ${color.backgroundLightPrimary};
  border: 1px solid ${color.backgroundDarkSecondary};
  border-radius: 5px;
`;
export const BurgerMenuItem = styled.li`
  cursor: pointer;
  padding: 5px 7px;
  ${font.bold};
  color: ${color.backgroundDarkSecondary};
  transition: color var(--speed);
  &:hover {
    color: ${color.backgroundLightest};
  }
`;
