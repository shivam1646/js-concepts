function print(str) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(str + ' resolved.');
      resolve(str + ' resolved.');
    }, 1000);
  });
}

var arr = ['p1', 'p2', 'p3', 'p4'];

// Execute multiple promises in sequence.
arr.reduce((acc, currVal) => {
  return acc.then(() => print(currVal));
}, Promise.resolve());

// Execute multiple promises in sequence and give the result of all promises in an array.
arr.reduce((acc, currVal) => {
  return acc.then(res => 
    print(currVal).then(resp => {
      return [...res, resp];
    })
  );
}, Promise.resolve([])).then(res => {
  console.log(res);
});

// using async await
const sequentialPromiseExec = async () => {
  for (const p of arr) {
    await print(p);
  }
}
sequentialPromiseExec();
