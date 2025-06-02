import clsx from "clsx";

export const getMainSectionClass = (animationClass: Record<string, boolean>) =>
  clsx(animationClass, "flex h-[88vh] min-h-[480px] flex-col justify-between");

export const introContainerClass = "flex h-3/4 flex-col justify-center space-y-4 sm:space-y-6";

export const greetingTextClass = clsx("animate-fade-in', 'text-xl sm:text-2xl lg:text-3xl");

export const headlineClass = clsx(
  "animate-fade-in !delay-200",
  "text-3xl sm:text-5xl lg:text-6xl",
  "break-words font-extrabold tracking-tight",
);

export const descriptionClass = clsx(
  "animate-fade-in !delay-300",
  "text-muted-dark dark:text-muted",
  "sm:text-lg lg:text-xl",
  "pb-0",
);

export const socialClass = clsx("animate-fade-in !delay-500", "mt-6");

export const scrollButtonClass = "mx-auto animate-bounce";
