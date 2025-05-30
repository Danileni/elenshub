import clsx from "clsx";

export const getBadgeClass = () =>
  clsx("mr-2 last-of-type:mr-0", "text-base font-medium text-primary-dark dark:text-primary-light");

export const getTitleLinkClass = () =>
  clsx("no-default z-0", "group-hover:text-primary-dark group-hover:dark:text-primary-light");

export const descriptionTextClass = "text-muted-dark dark:text-muted";

export const cardWrapperClass = "flex flex-col justify-between";
export const techStackWrapperClass = "mb-6 flex flex-wrap";
export const linksListClass = "flex space-x-3";
export const linkItemClass = "z-10";
