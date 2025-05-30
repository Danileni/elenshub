import React, { FC } from "react";
import { getCardClass } from "./styles";
import { ComponentProps } from "../../../../types/common";

const Card: FC<ComponentProps> = ({ className, children }) => {
  return <div className={getCardClass(className)}>{children}</div>;
};
export default Card;
