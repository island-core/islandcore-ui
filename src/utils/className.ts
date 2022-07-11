import classNames from "classnames";
import { filterObjects, filterStrings } from "./filter";

type CompulsoryClassNames = string;

type OptionalClassNames = {
    className: string,
    condition: boolean | boolean[] | number
}

type ClassNamesType = Array<CompulsoryClassNames | OptionalClassNames>

/**
 * This function is an abstraction over the external `classnames` library
 * @param {ClassNamesType} componentClassNames consists of compulsory and optional classNames
 * @example
 * ```
 * composeClassName(["class1", "class2", {className: "class3"}, condition: ""]) -> "class1 class2"
 * composeClassName(["class1", "class2", {className: "class3"}, condition: true]) -> "class1 class2 class3"
 * ```
 */
export const composeClassName = (componentClassNames: ClassNamesType): string => {
    const compulsoryClassNames: CompulsoryClassNames[] = filterStrings(componentClassNames);
    const optionalClassNames: OptionalClassNames[] = filterObjects<OptionalClassNames>(componentClassNames);
    
    const optionalList = optionalClassNames.map(option => ({[option.className]: Boolean(option.condition)}));
    
    return classNames(...compulsoryClassNames, ...optionalList);
}