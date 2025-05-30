import React, { FC } from "react";
import { getUnderlineClass, underlineWrapperClass } from "./styles";
import { SlidingInUnderlineProps } from "./types";

const SlidingInUnderline: FC<SlidingInUnderlineProps> = ({ children, type, height }) => {
  const isPrimary = (type?: string): boolean => {
    if (!type) {
      return true;
    }
    return type === "primary";
  };

  return (
    <span className={underlineWrapperClass}>
      {children}
      <span className={getUnderlineClass({ isPrimary, type, height })}></span>
    </span>
  );
};
export default SlidingInUnderline;
