let arr = [2, 4, 5, 8, 10];


Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  for (let i=0; i<this.length; i++) {
    accumulator = accumulator === undefined ? this[i] : callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

Array.prototype.myForEach = function (callback) {
  for (let i=0; i<this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i=0; i<this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
}

console.log('reduce...', arr.myReduce((prevValue, currValue, currIndex, arr) => {
  return prevValue + currValue + currIndex;
}, 0));

arr.myForEach((item, index, arr) => console.log(`index of ${item} in ${arr} is ${index}`));

console.log('map...', arr.myMap((item, index) => item*index));