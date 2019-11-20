export function isString (string) {
  return Object.prototype.toString.call(string) === '[object String]'
}
