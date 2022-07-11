import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { Color } from "../../types/color";
import { composeClassName } from "../../utils/className";
import { ButtonClose, ButtonCloseProps } from "./Close/ButtonClose";

import "./Button.scss";

export interface ButtonExtensions {
    Close: FC<ButtonCloseProps>,
    
    // TODO:
    // Dropdown: FC<DropdownButtonProps>
    // Icon: FC<IconButtonProps>
}

export type ButtonSize = "small" | "medium" | "large";

// HTML element to render the button 
export type ButtonAs = "button" | "span";

/**
 * T - type for `variant prop
 */
export interface ButtonProps<T = Color> extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    // FIXME: add more available elements to this prop type
    as?: ButtonAs,
    variant?: T,
    size?: ButtonSize,
    round?: boolean,
    ghost?: boolean,
}

export const Button: FC<ButtonProps> & ButtonExtensions = (props) => {
    const { 
        children,
        style,
        className,
        as: Component = "button",
        size = "medium",
        variant = "blue",
        round = false,
        ghost = false,
        ...restProps
     } = props as ButtonProps;

    const _style = style || {};
    const _className = composeClassName([
        `button`,
        `button--variant-${variant}`,
        `button--size-${size}`,
        {className: `button--ghost-${variant}`, condition: Boolean(ghost)},
        {className: `button--round`, condition: Boolean(round)},
        {className: (className ?? ""), condition: Boolean(className)}
    ]);

    return (
        <Component
            className={_className}
            style={_style}
            {...restProps}
        >
            {children}
        </Component>
    )
}

Button.Close = ButtonClose;