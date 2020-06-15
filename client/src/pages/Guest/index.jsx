import React from "react";
import { GuestPage } from "./styles";
import Navbar from "./Navbar";
import Routes from "./Routes";

const index = () => {
  return (
    <GuestPage>
      <Navbar />
      <Routes />
    </GuestPage>
  );
};

export default index;
