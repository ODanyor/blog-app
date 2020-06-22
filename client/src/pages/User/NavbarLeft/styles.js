import styled from "styled-components";
import { sizes } from "shared/utils/styles";

export const NavbarLeft = styled.ul`
  padding: 5px;
  max-width: 200px;
  width: 100%;
  @media screen and (max-width: ${sizes.middleResponsive}) {
    & {
      width: auto;
    }
  }
`;
