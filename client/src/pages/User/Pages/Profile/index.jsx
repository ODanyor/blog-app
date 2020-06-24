import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";

// Modules
import ProfileDetails from "./Details";

// Components
import { PageHead } from "shared/components";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

const index = ({ user }) => {
  const { credentials } = user;
  const { user_id } = useParams();

  // TODO: get user credentials using params user_id

  return (
    <Fragment>
      <PageHead
        title={credentials.full_name}
        subTitle="0 posts"
        border={true}
      />
      <ProfileDetails credentials={credentials} />
    </Fragment>
  );
};

index.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(index);
