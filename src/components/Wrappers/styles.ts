import clsx from "clsx";

export const getPageWrapperClass = (className?: string) =>
  clsx(className, "bg-overlay dark:bg-overlay-dark pt-18");
