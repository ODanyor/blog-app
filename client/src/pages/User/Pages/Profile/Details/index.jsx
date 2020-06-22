import React from "react";
import {
  ProfileDetails,
  BackgroundImg,
  ProfileContent,
  ProfileCredentials,
} from "./styles";

// Components
import { PageHead, Button } from "shared/components";

const index = () => {
  return (
    <ProfileDetails>
      <BackgroundImg />

      <ProfileContent>
        <ProfileCredentials>
          <PageHead title="Username" subTitle="email" />
        </ProfileCredentials>
        <Button colored={false} content="Edit profile" />
      </ProfileContent>
    </ProfileDetails>
  );
};

export default index;
