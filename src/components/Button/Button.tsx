import classNames from "classnames";
import React, { FC } from "react";
import { Color } from "../../types/color";
import buttonStyle from "./Button.module.scss";

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
        variant = "blue",
        size = "medium",
        round = false,
        ghost = false,
        ...restProps
    } = props as ButtonProps;

    const _style = style || {};
    const _className = classNames(
        buttonStyle[`button`],
        buttonStyle[`button--variant-${variant}`],
        buttonStyle[`button--size-${size}`],
        {
            [buttonStyle[`button--round`]]: round,
            [buttonStyle[`button--ghost-${variant}`]]: ghost
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