import React, { FC } from "react";
import { getInlineLinkClass } from "./styles";
import { SlidingInUnderline } from "../index";
import { InlineLinkProps } from "../../../types/common";

const InlineLink: FC<InlineLinkProps> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={getInlineLinkClass()}>
      <SlidingInUnderline>{children}</SlidingInUnderline>
    </a>
  );
};
export default InlineLink;
