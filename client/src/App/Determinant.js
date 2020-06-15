import React from "react";
import { useLocation } from "react-router-dom";
import User from "pages/User";
import Guest from "pages/Guest";

const Determinant = () => {
  const location = useLocation();
  const authenticated =
    location.search.split("authenticated=")[1] === "false" ? false : true;

  return authenticated ? <User /> : <Guest />;
};

export default Determinant;
