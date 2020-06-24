import React from "react";
import {
  ProfileDetails,
  BackgroundImg,
  ProfileContent,
  ProfileCredentials,
  AvatarContainer,
  JoinedCredentials,
  FollowingAndFollowers,
} from "./styles";

// Components
import { PageHead, Button, Link } from "shared/components";

// Icons
import { calendar } from "static/icons";

const index = ({ credentials }) => {
  const {
    _id,
    full_name,
    email,
    created_at,
    following,
    followers,
  } = credentials;

  return (
    <ProfileDetails>
      <BackgroundImg>
        <AvatarContainer></AvatarContainer>
      </BackgroundImg>

      <ProfileContent>
        <ProfileCredentials>
          <PageHead title={full_name} subTitle={email} />
          <JoinedCredentials>
            <img alt="icon" src={`/${calendar}`} width="20" height="20" />
            {created_at}
          </JoinedCredentials>
          <FollowingAndFollowers>
            <Link to={`${_id}/following`}>{following.length} Following</Link>
            <Link to={`${_id}/followers`}>{followers.length} Followers</Link>
          </FollowingAndFollowers>
        </ProfileCredentials>

        <Button colored={false} content="Edit profile" />
      </ProfileContent>
    </ProfileDetails>
  );
};

export default index;
