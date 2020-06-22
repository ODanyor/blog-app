import styled from "styled-components";
import { color } from "shared/utils/styles";

export const UserPage = styled.div`
  max-width: 990px;
  margin: 0 auto;
  display: flex;
`;

export const PageAndSearch = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(auto, 600px) 1fr;
`;

export const Page = styled.div`
  border: var(--border);
`;
