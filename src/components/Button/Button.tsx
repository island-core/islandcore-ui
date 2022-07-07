import classNames from "classnames";
import React, { FC } from "react";
import { Color } from "../../types/color";
import "./Button.scss";

export type ButtonSize = "small" | "medium" | "large";
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: Color,
    size?: ButtonSize,
    round?: boolean,
    ghost?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        style,
        round,
        ghost,
        variant = "blue",
        size = "medium",
        ...restProps
    } = props as ButtonProps;

    const _style = style || {};
    const _className = classNames(
        `button`,
        `button--variant-${variant}`,
        `button--size-${size}`,
        {
            [`button--round`]: round,
            [`button--ghost-${variant}`]: ghost,
        }
    );
    
    return (
        <button 
            className={_className}
            style={_style}
            {...restProps}
        >
            {children}
        </button>
    )
}