import { useEffect } from "react";

export const useFocusHandle = (ref) => {
  useEffect(() => {
    console.log(ref);
  }, [ref]);
};
