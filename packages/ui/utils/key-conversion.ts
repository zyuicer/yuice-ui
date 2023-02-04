export function snakeKeyConversion(key: string) {
  const setupKey = camelize(key);
  return key.charAt(0).toUpperCase() + setupKey.slice(1);
}

function camelize(key: string) {
  return key.replace(/-(\w)/g, (_, c: string) => {
    return c ? c.toUpperCase() : "";
  });
}
