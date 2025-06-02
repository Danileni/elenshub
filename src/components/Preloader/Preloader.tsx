import React, { FC } from "react";
import { BallTriangle } from "react-loader-spinner";
import { preloaderWrapperClass } from "./styles";

const Preloader: FC = () => {
  return (
    <div className={preloaderWrapperClass}>
      <BallTriangle wrapperClass="preloader" />
    </div>
  );
};
export default Preloader;
