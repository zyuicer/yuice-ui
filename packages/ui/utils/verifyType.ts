export const isNumberEvery = (value: unknown, index: number, arr) => {
  const type = typeof value;
  if (type === "number") {
    return arr;
  }
};

export const isString = (target: unknown) => {
  const type = typeof target;
  return target != null && type === "string";
};

export const isFunction = (target: unknown) => {
  const type = typeof target;
  return target != null && type === "function";
};
