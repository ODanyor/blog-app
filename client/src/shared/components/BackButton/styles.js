import styled from "styled-components";
import { color, sizes, font } from "shared/utils/styles";

export const BackButton = styled.div`
  cursor: pointer;
  ${font.size(25)};
  ${sizes.backButtonSize};
  background-color: ${color.textDark};
  border-radius: 50%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--speed);
  &:hover {
    background-color: ${color.textMedium};
  }
`;
