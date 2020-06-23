import React from "react";
import {
  ProfileDetails,
  BackgroundImg,
  ProfileContent,
  ProfileCredentials,
  JoinedCredentials,
} from "./styles";

// Components
import { PageHead, Button } from "shared/components";

// Icons
import { calendar } from "static/icons";

const index = () => {
  console.log(calendar);
  return (
    <ProfileDetails>
      <BackgroundImg />

      <ProfileContent>
        <ProfileCredentials>
          <PageHead title="Username" subTitle="email" />
          <JoinedCredentials>
            <img alt="icon" src={`/${calendar}`} width="20" height="20" />
            Joined at September of 2020
          </JoinedCredentials>
        </ProfileCredentials>

        <Button colored={false} content="Edit profile" />
      </ProfileContent>
    </ProfileDetails>
  );
};

export default index;
