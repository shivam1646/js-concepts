const printFn = function (city, state) {
  console.log(`${this.firstName} ${this.lastName} is from ${city}, ${state}`);
}

// polyfill implementation
Function.prototype.myCall = function (context, ...args) {
  context.fn = this;
  context.fn(...args);
}

Function.prototype.myApply = function (context, args) {
  context.fn = this;
  context.fn(...args);
}

const person = { firstName: "Shivam", lastName: "Kotak" };

// without polyfill
printFn.call(person, "Gotham", "DC");
// with polyfill
printFn.myCall(person, "Gotham", "DC");

// without polyfill
printFn.apply(person, ["Gotham", "DC"]);
// with polyfill
printFn.myApply(person, ["Gotham", "DC"]);
