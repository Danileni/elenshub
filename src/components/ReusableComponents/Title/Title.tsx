import React, { FC } from "react";
import { Link } from "react-router-dom";
import { boldSpanClass, getTitleTextClass, linkWrapperClass } from "./styles";
import { URLS } from "../../../constants/urls";
import { TitleProps } from "./types";

const Title: FC<TitleProps> = ({ size }) => {
  return (
    <Link to={URLS.root} className={linkWrapperClass}>
      <p className={getTitleTextClass(size)}>
        MEET<span className={boldSpanClass}>ELENI</span>
      </p>
    </Link>
  );
};
export default Title;
