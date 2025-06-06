import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect((): void => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <></>;
};
export default ScrollToTop;
