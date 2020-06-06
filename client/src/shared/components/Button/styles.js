import styled from "styled-components";
import { color, font } from "../../utils/styles";

// Button sizes: 30 --> 39
// Button colors: white --> blue

export const Button = styled.button`
  margin-left: 5px;
  cursor: pointer;
  height: 30px;
  padding: 0 17px;
  border-radius: 15px;
  border: 1px solid ${color.backgroundDarkSecondary};

  color: ${({ colored }) => (colored ? "#fff" : color.backgroundDarkSecondary)};
  background-color: ${({ colored }) =>
    colored ? color.backgroundDarkSecondary : "none"};

  ${font.bold};
  ${font.size(14)};
  transition: filter var(--speed);
  &:hover {
    filter: brightness(0.95);
  }
`;
