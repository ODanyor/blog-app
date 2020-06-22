import styled from "styled-components";
import { color } from "shared/utils/styles";

export const ProfileDetails = styled.div``;

export const BackgroundImg = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${color.backgroundLight};

  &:before {
    content: "";
    display: block;
    padding-top: 30%;
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileCredentials = styled.div``;
