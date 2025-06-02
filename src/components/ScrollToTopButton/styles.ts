import clsx from "clsx";

export const scrollButtonWrapperClass = "fixed bottom-0 right-0 mb-8 mr-8";

export const getIconButtonClass = (isVisible = false) =>
  clsx("duration-300", {
    "opacity-100": isVisible,
    "opacity-0": !isVisible,
  });
