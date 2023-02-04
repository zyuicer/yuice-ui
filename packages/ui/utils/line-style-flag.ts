export function createCustomizeStyle(
  componentName: string,
  styleKey: string,
  value: any
) {
  let customizeStyle = "--yu";
  customizeStyle += `-${componentName}-${styleKey}: ${value}`;
  return customizeStyle;
}
