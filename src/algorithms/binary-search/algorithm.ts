export default function binarySearch(
  orderedArray: Array<string | number>,
  target: string | number
): string | number | null {
  let base = 0;
  let arraySize = orderedArray.length - 1;
  let stepsToReachTarget = 0;

  while (base <= arraySize) {
    const offset = Math.round((base + arraySize) / 2);
    const guess = orderedArray[offset];
    stepsToReachTarget++;

    if (guess === target) {
      console.log(`Steps to reach the target: ${stepsToReachTarget}`);
      return guess;
    } else if (guess > target) {
      arraySize = offset - 1;
    } else {
      base = offset + 1;
    }
  }

  return null;
}
