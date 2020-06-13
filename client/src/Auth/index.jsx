import React, { useEffect } from "react";
import { PageLoader } from "shared/components";
import { useHistory } from "react-router-dom";
import { getStoredAuthToken } from "shared/utils/authToken";

const index = () => {
  const history = useHistory();

  useEffect(() => {
    if (!getStoredAuthToken()) history.push("/explore");
    else history.push("/");
  }, [history]);

  return <PageLoader />;
};

export default index;
