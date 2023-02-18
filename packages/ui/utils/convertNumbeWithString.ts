export function convertStringToNumber(
  target: number | string,
  afterSub: string
) {
  if (typeof target === "number") return `${target}${afterSub}`;
  return target;
}
