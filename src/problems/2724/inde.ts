/**
 * 2724. Sort By
 */

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

type SortByFn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: SortByFn): JSONValue[] {
  if (typeof arr[0] === "string") {
    return arr
      .slice()
      .sort((a, b) => (a as string).length - (b as string).length);
  }

  if (typeof arr[0] === "number") {
    return arr.slice().sort((a, b) => (a as number) - (b as number));
  }

  if (typeof arr[0] === "object") {
    return arr.slice().sort((a, b) => fn(a) - fn(b));
  }

  return [];
}

// const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
const arr = [1, 3, 2, 4, 3];
// const arr = ["a", "z", "d", "n", "b", "c"];

// console.log(sortBy(arr, (x) => x));
