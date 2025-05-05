/**
 * 2554. Maximum Number of Integers to Choose From a Range I
 */

function maxCount(banned: number[], n: number, maxSum: number): number {
  let currentSum = 0;
  const candidates: number[] = [];

  for (let i = 1; i <= n; i++) {
    candidates.push(i);
  }

  const availableNumbers = candidates.filter((num) => !banned.includes(num));

  const selectedNumbers = availableNumbers.filter((num) => {
    if (currentSum + num <= maxSum) {
      currentSum += num;
      return true;
    }
    return false;
  });

  return selectedNumbers.length;
}

console.log(maxCount([1, 6, 5], 5, 6));
