import React, { CSSProperties, FC, ReactNode, useEffect } from "react";
import { Color } from "../../../types/color";
import { composeClassName } from "../../../utils/className";

export type AlertItem = {
    title: string,
    children: ReactNode | ReactNode[]
}

export interface AlertItemProps {
    title: string,
    children: ReactNode | ReactNode[],
    timeout?: number,
    index: number,
    className?: string,
    style?: CSSProperties,
    variant?: Color,
    onTimeoutOver: (index: number) => void
}

export const AlertItem: FC<AlertItemProps> = ({
    title,
    children,
    timeout = 3000,
    index,
    className,
    style,
    variant = "blue",
    onTimeoutOver
}) => {
    // This construction sends a callback to the parent element when the timeout is over
    useEffect(() => {
        setTimeout(() => {
            onTimeoutOver(index);
        }, timeout)   
    });

    const _style = style || {};
    const _className = composeClassName([
        `alert--item`,
        `alert--item--variant-${variant}`,
        {className: (className ?? ""), condition: Boolean(className)}
    ]);

    return (
        <div className={_className} style={_style}>
            <div className="alert--item__title">{title}</div>
            <div className="alert--item__body">{children}</div>
        </div>
    )
}