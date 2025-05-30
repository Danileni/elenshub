import React, { FC } from "react";
import { getPrimaryButtonClass, iconWrapperClass } from "./styles";
import { SlidingInUnderline } from "../index";
import { PrimaryButtonProps } from "./types";

const PrimaryButton: FC<PrimaryButtonProps> = ({
  className,
  onClick,
  icon,
  children,
  inverted,
  active,
}) => {
  return (
    <button className={getPrimaryButtonClass({ className, active, inverted })} onClick={onClick}>
      {icon && <div className={iconWrapperClass}>{icon}</div>}
      {!active && <SlidingInUnderline type="secondary">{children}</SlidingInUnderline>}
      {active && children}
    </button>
  );
};
export default PrimaryButton;
