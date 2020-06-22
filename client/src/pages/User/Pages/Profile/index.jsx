import React from "react";

// Modules
import ProfileDetails from "./Details";

// Components
import { PageHead } from "shared/components";

const index = () => {
  return (
    <React.Fragment>
      <PageHead title="Full name" subTitle="Sub title" border={true} />
      <ProfileDetails />
    </React.Fragment>
  );
};

export default index;
