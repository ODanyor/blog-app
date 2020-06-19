import styled from "styled-components";
import { color, font } from "shared/utils/styles";

export const NavbarLink = styled.li`
  padding: 10px;
  border-radius: 44px;
  transition: background var(--speed);
  &:hover {
    background-color: ${color.backgroundMedium};
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 1000px) {
    & {
      justify-content: center;
    }
  }
`;

export const NavbarContent = styled.div`
  margin-left: 15px;
  ${font.size(18)};
  ${font.bold};
  color: ${color.textDark};
  @media screen and (max-width: 1000px) {
    & {
      display: none;
    }
  }
`;
