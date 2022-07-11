import React, { CSSProperties, FC, ReactNode } from "react";
import { composeClassName } from "../../utils/className";
import "./Text.scss";

export type TextAsProp =
    | "p"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "label"
    | "small";

export enum TextFontWeight {
    extraLight = 100,
    lighter = 200,
    light = 300,
    normal = 400,
    bolder = 500,
    semiBold = 600,
    bold = 700,
    semiBoldest = 800,
    boldest = 900
}

export interface TextProps {
    as?: TextAsProp,
    className?: string,
    children: ReactNode | ReactNode[],
    style?: CSSProperties,
    muted?: boolean,
    italic?: boolean,
    fontWeight?: TextFontWeight
}

export const Text: FC<TextProps> = ({
    as: Component = "span",
    className,
    children,
    style,
    muted = false,
    italic = false,
    fontWeight = 400
}) => {
    const _style = style || {};
    const _className = composeClassName([
        `text--weight-${fontWeight}`,
        {className: "text--muted", condition: muted},
        {className: "text--italic", condition: italic},
        {className: (className ?? ""), condition: Boolean(className)}
    ]);

    return (
        <Component className={_className} style={_style}>
            {children}
        </Component>
    )
}