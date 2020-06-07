import styled from "styled-components";
import { color, sizes } from "../../utils/styles";

export const BurgerButton = styled.ul`
  margin: 15px;
  cursor: pointer;
  min-width: calc(${sizes.navbarHeight} * 0.6px);
  min-height: calc(${sizes.navbarHeight} * 0.6px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 50%;
  background-color: ${color.backgroundLightPrimary};
  transition: filter var(--speed);

  &:hover {
    filter: brightness(var(--darker));
  }
  @media screen and (min-width: 990px) {
    & {
      display: none;
    }
  }
`;

export const Burger = styled.li`
  width: 6px;
  height: 6px;
  border: 2px solid ${color.backgroundDarkSecondary};
  border-radius: 50%;
`;
