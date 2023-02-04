export function verifyRule(rule: boolean, message: string) {
  rule && console.error(message);
  return rule;
}
