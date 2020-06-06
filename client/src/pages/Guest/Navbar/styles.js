import styled from "styled-components";
import { color, sizes } from "../../../shared/utils/styles";

export const Navbar = styled.div`
  position: fixed;
  width: 100%;
  height: 54px;
  background-color: ${color.backgroundLightPrimary};
`;

export const NavbarItems = styled.div`
  margin: 0 auto;
  max-width: ${sizes.navbarWidth}px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

export const NavbarSideItems = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: ${({ rightSideItems }) =>
    rightSideItems ? "flex-start" : "flex-end"};
`;
