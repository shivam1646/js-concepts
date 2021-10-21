const search = (searchText) => {
  console.log("search for...", searchText);
}

const debounce = (func, delay = 300) => {
  const context = this;
  let timer;
  // args has the searchText
  return function (...args) {
    // clear the previous fn call if new call is made before delay
    clearTimeout(timer);
    // call the fn after delay
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

const onSearchInput = debounce(search, 300);