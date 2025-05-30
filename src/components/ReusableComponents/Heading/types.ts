import { ComponentProps } from "../../../types/common";

export type HeadingTag = "h1" | "h2" | "h3";

export type HeadingProps = ComponentProps & {
    level: HeadingTag;
};
