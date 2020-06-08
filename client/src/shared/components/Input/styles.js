import styled from "styled-components";
import { color, font } from "../../utils/styles";

export const Input = styled.div`
  max-width: 350px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin: 0 2rem;
  border-radius: 30px;
  background: ${({ focused }) =>
    focused ? color.secondary : color.backgroundLight};
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
