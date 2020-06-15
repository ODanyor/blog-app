import styled from "styled-components";
import { color, font } from "shared/utils/styles";

export const Form = styled.form`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin: 7px 0;
  padding: 7px;
  display: flex;
  flex-direction: column;
  background-color: ${color.backgroundLight};
  border-bottom: 2px solid
    ${({ focused, isError }) => {
      if (focused) return color.backgroundDarkSecondary;
      else if (isError) return color.danger;
      else return color.textLight;
    }};
  color: ${({ focused }) =>
    focused ? color.backgroundDarkSecondary : color.textLight};
  ${font.bold};
  ${font.size(13)};
`;

export const FormInput = styled.input`
  padding: 2px 0;
  ${font.size(19)};
  &::placeholder {
    color: ${({ isError }) => (isError ? color.warning : "")};
  }
`;

export const FormMessage = styled.div`
  color: ${color.danger};
`;

export const FormButton = styled.button`
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  margin: 10px 0;
  height: 47px;
  ${font.bold};
  ${font.size(19)};
  color: #fff;
  border-radius: 47px;
  background-color: ${color.backgroundDarkSecondary};
  transition: filter var(--speed);
  &:hover {
    filter: ${({ disabled }) =>
      disabled ? "none" : "brightness(var(--lighter))"};
  }
`;
