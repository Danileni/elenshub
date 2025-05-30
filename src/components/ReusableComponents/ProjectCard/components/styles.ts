import clsx from "clsx";

export const getBadgeClass = (className = "", active = false) =>
  clsx(
    className,
    "list-none",
    {
      "bg-primary-dark/10 font-semibold text-primary-dark/95 dark:bg-primary-light/10 dark:text-primary-light/95":
        !active,
      "bg-primary-dark/20 font-bold text-primary-dark dark:bg-primary-light/20 dark:text-primary-light":
        active,
    },
    "duration-300 hover:bg-primary-dark/[0.175] hover:dark:bg-primary-light/[0.175]",
    "rounded-lg px-2 py-1 my-auto text-sm",
  );

export const getCardClass = (className = "") =>
  clsx(
    "group",
    "w-full",
    "transform duration-300",
    "rounded-2xl border border-slate-500/20 dark:border-slate-600/30",
    "bg-slate-100/20 dark:bg-slate-600/20",
    "hover:bg-slate-100/30 dark:hover:bg-slate-600/30",
    "cursor-pointer",
    "p-4 sm:p-6",
    className,
  );
