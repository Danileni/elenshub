import clsx from "clsx";

export const socialIconClass = "text-muted-dark dark:text-muted";

export const getSocialListClass = (className?: string) =>
  clsx(className, "flex list-none items-center space-x-4");
