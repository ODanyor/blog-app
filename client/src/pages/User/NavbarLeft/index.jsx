import React, { useEffect, useState } from "react";
import { NavbarLeft, NavbarLink } from "./styles";

// Components
import { Link } from "shared/components";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

const index = ({ user }) => {
  const [userId, setUserId] = useState("/");

  useEffect(() => {
    if (user.credentials) setUserId(user.credentials._id);
  }, [user]);

  return (
    <NavbarLeft>
      <NavbarLink>
        <Link to="/">Home</Link>
      </NavbarLink>
      <NavbarLink>
        <Link to="/explore">Explore</Link>
      </NavbarLink>
      <NavbarLink>
        <Link to="/notifications">Notifications</Link>
      </NavbarLink>
      <NavbarLink>
        <Link to="/messages">Messages</Link>
      </NavbarLink>
      <NavbarLink>
        <Link to={`/profile/${userId}`}>Profile</Link>
      </NavbarLink>
    </NavbarLeft>
  );
};

index.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(index);
