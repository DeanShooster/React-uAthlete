import { useEffect } from "react";

export const useScrollTopView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};
