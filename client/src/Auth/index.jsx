import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getStoredAuthToken } from "shared/utils/authToken";

const index = () => {
  const history = useHistory();

  useEffect(() => {
    getStoredAuthToken()
      ? history.push("/")
      : history.push("/?authenticated=false");
  }, [history]);

  return <p>Authentication ...</p>;
};

export default index;
