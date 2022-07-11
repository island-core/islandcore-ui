import { isNumber, isObject, isString } from "./typeCheck";

export const filterNumbers = (items: Array<any>) => items.filter(item => isNumber(item));

export const filterStrings = (items: Array<any>) => items.filter(item => isString(item));

export const filterObjects = <T extends object>(items: Array<any>) => items.filter(item => isObject(item)) as (T[] | []);