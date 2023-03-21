export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const value of array.entries()) {
    arr.push(`${appendString}${value}`);
  }

  return arr;
}
