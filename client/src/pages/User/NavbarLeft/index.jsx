import React from "react";
import { NavbarLeft } from "./styles";

// Modules
import NavbarLink from "./NavbarLink";
import ProfileLink from "./ProfileLink";
import Skeleton from "./Skeleton";

// Icons
import { home, gps, bell, mail, bookmark, profile, gear } from "static/icons";

// HOC
import { withLoading } from "shared/hoc";

// Components
import { LogoButton, Link } from "shared/components";

const index = ({ user }) => {
  const links = [
    { icon: home, to: "/", content: "Home" },
    { icon: gps, to: "/explore", content: "Explore" },
    { icon: bell, to: "/notifications", content: "Notifications" },
    { icon: mail, to: "/messages", content: "Messages" },
    { icon: bookmark, to: "/bookmarks", content: "Bookmarks" },
    {
      icon: profile,
      to: `/profile/${user.credentials._id}`,
      content: "Profile",
    },
    { icon: gear, to: "/settings", content: "Settings" },
  ];

  return (
    <NavbarLeft>
      <Link to="/">
        <LogoButton icon="📣" />
      </Link>
      <NavbarLinks links={links} />

      {/* <ProfileLink credentials={user.credentials} /> */}
    </NavbarLeft>
  );
};

const NavbarLinks = ({ links }) =>
  links.map(({ icon, to, content }, index) => (
    <NavbarLink key={index} icon={icon} to={to} content={content} />
  ));

export default withLoading(Skeleton, index);
