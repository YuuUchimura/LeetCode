//Counter II

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let count = init;

  const increment = () => {
    return ++count;
  };

  const decrement = () => {
    return --count;
  };

  const reset = () => {
    return (count = init);
  };

  return { increment, decrement, reset };
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
