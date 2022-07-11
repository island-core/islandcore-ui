export const isNull = (value: any | unknown) => value === null;

export const isUndefined = (value: any | unknown) => value === undefined;

export const inNullOrUndefined = (value: any | unknown) => isNull(value) || isUndefined(value);

export const isString = (value: any | unknown) => typeof value === "string";

export const isEmptyString = (value: any | unknown) => value === "";

export const isNumber = (value: any | unknown) => typeof value === "number";

export const isBoolean = (value: any | unknown) => typeof value === "boolean";

export const isPrimitive = (value: any | unknown) => isBoolean(value) || isString(value) || isNumber(value);

export const isFunction = (value: any | unknown) => typeof value === "function";

export const isObject = (value: any | unknown) => typeof value === "object";