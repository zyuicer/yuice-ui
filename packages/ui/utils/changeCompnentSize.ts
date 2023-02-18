import { YuSizeOptions } from "@ui/types/base.type";

export function changeComponentSize(componentName, size: YuSizeOptions) {
  return `yu-${componentName}-${size}`;
}
