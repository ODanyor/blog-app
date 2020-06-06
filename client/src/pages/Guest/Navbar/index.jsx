import React from "react";
import { Navbar, NavbarItems, NavbarSideItems } from "./styles";

// Components
import { BackButton, SearchBar, Button } from "../../../shared/components";

const index = () => {
  return (
    <Navbar>
      <NavbarItems>
        <NavbarSideItems rightSideItems={true}>
          <BackButton icon="📣" />
          <SearchBar />
        </NavbarSideItems>
        <NavbarSideItems rightSideItems={false}>
          <Button colored={false} content="Sign in" />
          <Button colored={true} content="Sign up" />
        </NavbarSideItems>
      </NavbarItems>
    </Navbar>
  );
};

export default index;
