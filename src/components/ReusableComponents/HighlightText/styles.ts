import clsx from "clsx";

export const getHighlightTextClass = () =>
  clsx(
    "from-fuchsia-700 to-indigo-700 bg-clip-text",
    "dark:from-fuchsia-400 dark:to-blue-400",
    "text-transparent transition",
  );
