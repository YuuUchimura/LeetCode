/**
 * 2637. Promise Time Limit
 */

type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    try {
      const start = performance.now();

      await fn(...args);

      const time = Math.floor(performance.now() - start);

      if (time >= t) {
        throw Math.floor(args[0]) - Math.floor(t);
      }

      return { resolved: "ok" };
    } catch (error) {
      throw error;
    }
  };
}

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);

limited(150).catch(console.log);
