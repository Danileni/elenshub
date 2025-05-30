import clsx from "clsx";

export const getDropdownContainerClass = () =>
  clsx(
    "absolute right-0",
    "mt-2 py-2",
    "bg-slate-200/95 dark:bg-slate-900/95",
    "flex w-32 flex-col rounded-lg shadow-lg"
  );

export const getNavLinkClass = (isActive: boolean) =>
  clsx(
    "w-full",
    "hover:color-[inherit]",
    "hover:no-underline",
    {
      "font-bold": isActive,
      "font-noma": !isActive
    }
  );

export const getListItemClass = () =>
  clsx(
    "cursor-pointer",
    "flex w-full px-2 py-1",
    "hover:bg-slate-300/50 hover:dark:bg-slate-950/50"
  );
