import React, { FC } from "react";
import { composeClassName } from "../../../utils/className";
import { ButtonProps } from "../Button";
import "./ButtonClose.scss";

export type ButtonCloseVariant = "dark" | "light";

export interface ButtonCloseProps extends ButtonProps<ButtonCloseVariant> {
    // This prop must be required in this component
    onClick: () => {}
}

/**
 * TODO: finish this component when `Icon` component is implemented
 */
export const ButtonClose: FC<ButtonCloseProps> = (props) => {
    const {
        as: Component = "button",
        round = false,
        ghost = false,
        className,
        style,
        variant = "dark",
        ...restProps
    } = props as ButtonCloseProps;
    
    const _className = composeClassName([
        `button`,
        `button--close`,
        `button--close--${variant}`,
        {className: `button--round`, condition: Boolean(round)},
        {className: `button--close--ghost-${variant}`, condition: Boolean(ghost)},
        {className: (className ?? ""), condition: Boolean(className)},
    ]);

    return (
        <Component
            className={_className}
            {...restProps}
        >
            {/* ... */}
        </Component>
    )
}