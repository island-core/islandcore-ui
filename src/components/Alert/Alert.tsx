import { useState } from "@storybook/addons";
import React, { CSSProperties, FC } from "react";
import { Color } from "../../types/color";
import { composeClassName } from "../../utils/className";
import { AlertItem, AlertItemProps } from "./Item/AlertItem";

export type AlertTransition = "fade" | "float";
export type AlertPosition = "left-top" | "left-bottom" | "right-top" | "right-bottom";

export type AlertItems = {
    [key in keyof AlertItemProps]: AlertItemProps[key]
}

export interface AlertProps {
    position?: AlertPosition,
    items?: AlertItem[],
    timeout?: number,
    className?: string,
    style?: CSSProperties,
    variant?: Color,
    /**
     * FIXME: not implemented yet
     */
    transition?: AlertTransition
}

/**
 * @see `useAlert()` hook to manage the state of the `Alert` component
 */
export const Alert: FC<AlertProps> = ({
    /* internal */
    position = "right-top",
    items = [],
    /* external */
    timeout,
    className,
    style,
    variant,
    transition = "fade"
}) => {
    const [alerts, setAlerts] = useState<AlertItem[]>(items);
    
    /**
     * Function that must be called when time on timeout is over
     * @description The function deletes the node, which has reached the timeout, from the tree
     */
    const onTimeoutOver = (index: number) => {
        setAlerts(alerts.splice(index, 1));
    }

    const _className = composeClassName([
        `alert--container`,
        `alert--container--position--${position}`
    ]);

    return (
        <div className={_className}>
            {alerts.length > 0 && alerts.map((item, index) => (
                <AlertItem
                    title={item.title}
                    timeout={timeout}
                    index={index}
                    onTimeoutOver={onTimeoutOver}
                    key={index}
                    className={className}
                    style={style}
                    variant={variant}
                >
                    {item.children}
                </AlertItem>
            ))}
        </div>
    )
}