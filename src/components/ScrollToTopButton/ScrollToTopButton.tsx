import React, { FC } from "react";
import { getIconButtonClass, scrollButtonWrapperClass } from "./styles";
import ArrowUpFillIcon from "remixicon-react/ArrowUpFillIcon";
import { IconButton } from "../ReusableComponents";
import { useScrollToTop, useScrollToTopVisibility } from "../../hooks";

const ScrollToTopButton: FC = () => {
  const isButtonVisible = useScrollToTopVisibility();

  return (
    <div className={scrollButtonWrapperClass}>
      <IconButton
        className={getIconButtonClass(isButtonVisible)}
        icon={<ArrowUpFillIcon size={24} />}
        screenReaderText="Scroll to top"
        onClick={useScrollToTop}
      />
    </div>
  );
};
export default ScrollToTopButton;
