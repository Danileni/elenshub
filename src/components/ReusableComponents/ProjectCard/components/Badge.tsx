import React, { FC } from "react";
import { getBadgeClass } from "./styles";
import { BadgeProps } from "./types";

const Badge: FC<BadgeProps> = ({ className, children, onClick, active = false }) => {
  return (
    <div className={getBadgeClass(className, active)} onClick={onClick}>
      {children}
    </div>
  );
};
export default Badge;
