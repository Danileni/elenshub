import clsx from "clsx";

export const getPrimaryButtonClass = ({ className = "", active = false, inverted = false }) => {
  return clsx(
    className,
    "group/underline flex w-fit items-center transition duration-300 ease-in-out",
    {
      "font-extrabold text-primary-dark dark:text-white": active,
      "font-semibold": !active,
    },
    {
      "rounded-xl px-3 py-1": inverted,
      "text-primary-dark dark:text-primary-light": inverted,
      "hover:bg-primary-dark/5 dark:hover:bg-primary-light/5": inverted && !active,
      "hover:text-primary-dark dark:hover:text-primary-light": !inverted && !active,
    },
  );
};

export const iconWrapperClass = "pe-1";
