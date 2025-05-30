import clsx from "clsx";
import { HeadingTag } from "./types";

export const getHeadingClass = (level: HeadingTag, className = "") =>
  clsx(className, {
    "py-8 text-[1.75rem] font-bold leading-8 md:text-4xl font-extrabold tracking-tight":
      level === "h1",
    "py-4 text-2xl font-bold md:text-3xl": level === "h2",
    "pb-4 font-semibold text-lg": level === "h3",
  });
