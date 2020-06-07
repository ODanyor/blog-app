import { useEffect } from "react";

export const useOutsideClickHandle = (ref, setOpen) => {
  useEffect(() => {
    const outsideClickHandle = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        return setOpen(false);
      }
    };
    document.addEventListener("mousedown", outsideClickHandle);
    return () => document.removeEventListener("mousedown", outsideClickHandle);
  }, [ref]);
};
