export const mutable = <T extends readonly any[] | Record<string, unknown>>(
  val: T
) => val as Mutable<typeof val>;
// - 去除只读的类型变成可修改的类型  -readonly
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};
