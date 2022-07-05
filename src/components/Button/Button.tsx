import { Color } from "@/types/color";
import classNames from "classnames";
import React, { CSSProperties, FC } from "react";
import buttonStyle from "./Button.module.scss";

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: Color
}

const DEFAULT_CLASS_LIST: Array<string> = [buttonStyle.button];

export const Button: FC<ButtonProps> = (props) => {
    const {children, variant, style, className, ...restProps} = props as ButtonProps;

    const _className = classNames(
        DEFAULT_CLASS_LIST.join(" "),
        `${buttonStyle.button}-${variant}` && variant,
        className
    );

    console.log(DEFAULT_CLASS_LIST);

    const _style: CSSProperties = style || {};    

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