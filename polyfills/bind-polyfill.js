const person = { firstName: "Shivam", lastName: "Kotak" };

const printFn = function (city, state) {
  console.log(`${this.firstName} ${this.lastName} is from ${city}, ${state}`);
}

// polyfill implementation
Function.prototype.myBind = function (...args) {
  const obj = this;
  const params = args.splice(1);
  return function(...args2) {
    // args[0] is the context, params represents ['Ahmedabad'], args2 is ['Gujarat]
    obj.apply(args[0], [...params, ...args2]);
  }
}

// without polyfill
const printFnWithoutPolyfill = printFn.bind(person, "Gotham");
printFnWithoutPolyfill("DC");
// with polyfill
const printFnUsingPolyfill = printFn.myBind(person, "Gotham");
printFnUsingPolyfill("DC");
