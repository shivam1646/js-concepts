// A HOF that is used to memoize the given function
const memoize = callback => {
  const cache = {};
  return (...args) => {
    const stringifiedArgs = JSON.stringify(...args);
    const result = cache[stringifiedArgs] || callback(...args);

    cache[stringifiedArgs] = result
    return result;
  };
}

// we have a function
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

// first time - calls "add"
console.log(memoizedAdd(3, 4));
// second time - comes from cache
console.log(memoizedAdd(3, 4));