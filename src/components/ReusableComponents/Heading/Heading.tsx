import React, { FC, JSX } from "react";
import { getHeadingClass } from "./styles";
import { HeadingProps } from "./types";

const Heading: FC<HeadingProps> = ({ id, className, children, level }) => {
  const HeadingTag = `${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag id={id} className={getHeadingClass(level, className)}>
      {children}
    </HeadingTag>
  );
};
export default Heading;
