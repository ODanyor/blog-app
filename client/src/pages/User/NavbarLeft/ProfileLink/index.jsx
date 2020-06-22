import React from "react";
import { ProfileLink, ProfileLinkContent, ProfileLinkImg } from "./styles";

const index = ({ credentials }) => {
  return (
    <ProfileLink>
      <ProfileLinkContent>
        <ProfileLinkImg>
          <img alt="avatar" width="25" height="25" />
        </ProfileLinkImg>
      </ProfileLinkContent>
    </ProfileLink>
  );
};

export default index;
