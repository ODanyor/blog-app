import styled from "styled-components";
import { color, font } from "../../utils/styles";

export const SearchBar = styled.div`
  max-width: 350px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin: 0 2rem;
  border-radius: 15px;
  background: ${({ focus }) => (focus ? color.secondary : color.borderLight)};
  overflow: hidden;
`;

export const SearchIcon = styled.div`
  padding: 5px;
  width: 30px;
  height: 30px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  color: ${color.textDark};
`;
