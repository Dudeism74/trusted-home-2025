/** Bound the input before evaluating the email pattern. */
export function isValidEmailAddress(value: string) {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
