import clsx from "clsx";

type UnderlineClassParams = {
  isPrimary: (type?: string) => boolean;
  type?: string;
  height?: string;
};

export const getUnderlineClass = ({ isPrimary, type, height }: UnderlineClassParams) => {
  return clsx(
    {
      "bg-primary-lighter-dark dark:bg-primary-lighter": isPrimary(type),
      "bg-primary-dark dark:bg-primary-light": !isPrimary(type),
      "h-0.5": height === "lg",
      "h-[0.075rem]": height !== "lg",
    },
    "absolute inset-x-0 bottom-0.5",
    "transition-width duration-300",
    "w-0 group-hover/underline:w-full",
  );
};

export const underlineWrapperClass = "group/underline relative inline-block";
