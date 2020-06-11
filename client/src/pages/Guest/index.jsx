import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GuestPage } from "./styles";
import Navbar from "./Navbar";
import Routes from "./Routes";

const index = () => {
  return (
    <GuestPage>
      <Navbar />
    </GuestPage>
  );
};

export default index;
