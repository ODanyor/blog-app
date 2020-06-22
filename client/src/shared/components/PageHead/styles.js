import styled from "styled-components";
import { font, color } from "shared/utils/styles";

export const PageHead = styled.div`
  padding: 0 15px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: ${({ border }) => (border ? `var(--border)` : null)};
`;

export const PageTitle = styled.h3`
  ${font.black};
`;

export const PageSubTitle = styled.span`
  ${font.medium};
  ${font.size(14)};
  color: ${color.textLight};
`;
