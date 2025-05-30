import clsx from "clsx";
import { TypographyLevels } from "./types";

export const getTitleTextClass = (size?: TypographyLevels) =>
  clsx("pb-0 font-light uppercase", {
    "text-2xl md:text-3xl": size === "lg",
    "text-xl": size !== "lg",
  });

export const boldSpanClass = "font-bold";
export const linkWrapperClass = "title";
