import React, { useEffect, useState } from "react";
import { NavbarLeft } from "./styles";
import NavbarLink from "./NavbarLink";

// Icons
import { home, gps, bell, mail, bookmark, profile, gear } from "static/icons";

// Components
import { LogoButton, Link } from "shared/components";

// Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

const index = ({ user }) => {
  const [userId, setUserId] = useState("/");
  const links = [
    { icon: home, to: "/", content: "Home" },
    { icon: gps, to: "/explore", content: "Explore" },
    { icon: bell, to: "/notifications", content: "Notifications" },
    { icon: mail, to: "/messages", content: "Messages" },
    { icon: bookmark, to: "/bookmarks", content: "Bookmark" },
    { icon: profile, to: `/profile/${userId}`, content: "Profile" },
    { icon: gear, to: "/settings", content: "Settings" },
  ];

  useEffect(() => {
    if (user.credentials) setUserId(user.credentials._id);
  }, [user]);

  return (
    <NavbarLeft>
      <Link to="/">
        <LogoButton icon="📣" />
      </Link>
      <NavbarLinks links={links} />
    </NavbarLeft>
  );
};

const NavbarLinks = ({ links }) =>
  links.map(({ icon, to, content }, index) => (
    <NavbarLink key={index} icon={icon} to={to} content={content} />
  ));

index.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(index);
