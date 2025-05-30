import React, { FC } from "react";
import { getIconButtonClass } from "./styles";
import { IconButtonProps } from "./types";

const IconButton: FC<IconButtonProps> = ({ onClick, className, screenReaderText, icon }) => {
  return (
    <button onClick={onClick} className={getIconButtonClass(className)}>
      <p className="sr-only">{screenReaderText}</p>
      {icon}
    </button>
  );
};
export default IconButton;
