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
  Input,
  Button,
  BurgerButton,
  Link,
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
          <Input icon="🔍" placeholder="Search here ..." />
        </NavbarSideItems>
        <NavbarSideItems rightSideItems={true}>
          <Link to="/login">
            <Button colored={false} content="Sign in" />
          </Link>
          <Link to="/register">
            <Button colored={true} content="Sign up" />
          </Link>
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
        <Link to="/login">
          <BurgerMenuItem colored={false}>Sign in</BurgerMenuItem>
        </Link>
        <Link to="/register">
          <BurgerMenuItem colored={true}>Sign up</BurgerMenuItem>
        </Link>
      </BurgerMenuItems>
    </BurgerMenu>
  );
};

export default index;
