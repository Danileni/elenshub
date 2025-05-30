import { ComponentProps } from "../../../types/common"

export type IconButtonProps = ComponentProps & {
    onClick?: () => void
    icon?: React.ReactNode
    screenReaderText?: string
    active?: boolean
};
