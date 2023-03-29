export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((param) => (param !== undefined ? param.startsWith(startString) : ''))
    .map((param) => (param !== undefined ? param.slice(startString.length) : ''))
    .join('-');
}
