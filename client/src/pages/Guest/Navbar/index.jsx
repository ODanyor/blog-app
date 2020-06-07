import React, { useState, useRef } from "react";
import {
  Navbar,
  NavbarItems,
  NavbarSideItems,
  BurgerMenu,
  BurgerMenuItems,
  BurgerMenuItem,
} from "./styles";

// Components
import {
  BackButton,
  SearchBar,
  Button,
  BurgerButton,
} from "../../../shared/components";

// Hooks
import { useOutsideClickHandle } from "../../../shared/hooks";

const index = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Navbar>
      <NavbarItems>
        <NavbarSideItems rightSideItems={false}>
          <BackButton icon="📣" />
          <SearchBar />
        </NavbarSideItems>
        <NavbarSideItems rightSideItems={true}>
          <Button colored={false} content="Sign in" />
          <Button colored={true} content="Sign up" />
        </NavbarSideItems>
        <BurgerButton trigger={toggle} />
      </NavbarItems>
      {open && <BurgerMenuPopup setOpen={setOpen} />}
    </Navbar>
  );
};

const BurgerMenuPopup = ({ setOpen }) => {
  const menuRef = useRef(null);
  useOutsideClickHandle(menuRef, setOpen);

  return (
    <BurgerMenu>
      <BurgerMenuItems ref={menuRef}>
        <BurgerMenuItem>Sign in</BurgerMenuItem>
        <BurgerMenuItem>Sign up</BurgerMenuItem>
      </BurgerMenuItems>
    </BurgerMenu>
  );
};

export default index;
