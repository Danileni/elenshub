import clsx from "clsx";

export const getInlineLinkClass = () =>
  clsx(
    "cursor-pointer",
    "font-semibold duration-300",
    "text-primary-dark hover:text-primary-lighter-dark",
    "dark:text-primary-light dark:hover:text-primary-lighter",
  );
