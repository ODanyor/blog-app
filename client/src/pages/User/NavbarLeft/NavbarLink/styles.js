import styled from "styled-components";
import { color, font, sizes } from "shared/utils/styles";

export const NavbarLink = styled.li`
  padding: 10px;
  border-radius: 44px;
  transition: background var(--speed);
  &:hover {
    div {
      color: ${color.backgroundDarkSecondary};
    }
    background-color: ${color.backgroundMedium};
  }
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: ${sizes.middleResponsive}) {
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
  transition: color var(--speed);
  @media screen and (max-width: ${sizes.middleResponsive}) {
    & {
      display: none;
    }
  }
`;
