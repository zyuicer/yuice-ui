export const isNumberEvery = (value: unknown, index: number, arr) => {
  const type = typeof value;
  if (type === "number") {
    return arr;
  }
};
