import styled from "styled-components";
import { font, color } from "shared/utils/styles";

export const ProfileDetails = styled.div``;

export const BackgroundImg = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: ${color.backgroundLight};

  &:before {
    content: "";
    display: block;
  }
`;

export const ProfileContent = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

export const ProfileCredentials = styled.div`
  position: relative;
  ${font.size(13)};
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: 30%;
  overflow: hidden;
  background-color: #fff;
  border-radius: 50%;
  &:after {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

export const JoinedCredentials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${font.bold};
  color: ${color.textLight};

  img {
    margin-right: 5px;
  }
`;

export const FollowingAndFollowers = styled.div`
  display: flex;
  flex-wrap: wrap;

  * {
    margin-right: 15px;
  }
`;
