/**
 * 1128. Number of Equivalent Domino Pairs
 */

function numEquivDominoPairs(dominoes: number[][]): number {
  let result = 0;
  const map = new Map<string, number>();

  dominoes.forEach((domino) => {
    const key = domino
      .slice()
      .sort((a, b) => a - b)
      .toString();

    if (map.has(key)) {
      result += map.get(key)!;
      map.set(key, map.get(key)! + 1);
    } else {
      map.set(key, 1);
    }
  });

  return result;
}

console.log(
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ])
);
