import React from "react";
import { NavbarLink, NavbarContent } from "./styles";

// Components
import { Link } from "shared/components";

const index = ({ icon, to, content }) => {
  return (
    <Link to={to}>
      <NavbarLink>
        <img alt="icon" src={icon} width="24px" height="24px" />
        <NavbarContent>{content}</NavbarContent>
      </NavbarLink>
    </Link>
  );
};

export default index;
