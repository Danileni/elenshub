import { ComponentProps } from "../../../../types/common";

export type BadgeProps = ComponentProps & {
  active?: boolean;
  onClick?: () => void;
};
