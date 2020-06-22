import styled from "styled-components";
import { color } from "shared/utils/styles";

export const Input = styled.label`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  transition: background var(--speed);
  background: ${({ focused }) => (focused ? "#fff" : color.backgroundLight)};
  overflow: hidden;
`;

export const InputIcon = styled.div`
  padding: 5px;
  width: 30px;
  height: 30px;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 5px;
  color: ${color.textDark};
`;
