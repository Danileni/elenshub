export const SIZES = {
  h1: "3xl",
  h2: "2xl",
  h3: "xl",
  h4: "lg",
  h5: "md",
  h6: "sm",
} as const;

type TypeScaleSizes = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
  "3xl": number;
};

export type TypographyLevels = keyof TypeScaleSizes;

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  size?: TypographyLevels;
  as?: HeadingTag;
};
