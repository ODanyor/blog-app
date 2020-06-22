import React, { useEffect, useState } from "react";

const withLoading = (Skeleton, Component) => ({ loader, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loader) setIsLoading(false);
  }, [loader]);

  return isLoading ? <Skeleton /> : <Component {...props} />;
};

export default withLoading;
