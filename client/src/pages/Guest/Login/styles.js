import styled from "styled-components";
import { color, font } from "shared/utils/styles";

export const LoginPageIcon = styled.div`
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  ${font.bold};
  ${font.size(27)};
  color: ${color.textLight};
`;

export const LoginPageTitle = styled.h2`
  padding: 30px 0 10px;
  display: flex;
  justify-content: center;
`;

export const LoginPageLinks = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginPageLink = styled.span`
  margin: 0 5px;
  ${font.size(14)};
  color: ${color.backgroundDarkSecondary};
`;
