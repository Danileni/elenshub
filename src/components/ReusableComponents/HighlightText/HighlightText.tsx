import React, { FC } from "react";
import { getHighlightTextClass } from "./styles";
import { useRotatingBackground } from "../../../hooks";
import { ComponentProps } from "../../../types/common";

const HighlightText: FC<ComponentProps> = ({ children }) => {
  const [ref] = useRotatingBackground();

  return (
    <span ref={ref} className={getHighlightTextClass()}>
      {children}
    </span>
  );
};
export default HighlightText;
