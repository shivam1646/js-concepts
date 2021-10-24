
// TODO: implement chaining
class MyPromise {
  constructor(callback) {
    this.promiseState = 'PENDING';
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
    this.thenCallbackFn = null;
    this.catchCallbackFn = null;
    this.promiseValue = null;
    this.isResolveCalled = false;
    this.isRejectCalled = false;
    callback(this.resolve, this.resolve);
  }

  resolve(data) {
    this.isResolveCalled = true;
    this.promiseValue = data;
    // execute then function if callback function is asynchronous
    if (typeof this.thenCallbackFn === 'function') {
      this.thenCallbackFn(data);
      this.promiseState = 'RESOLVED';
    }
  }

  reject(error) {
    this.isRejectCalled = true;
    this.promiseValue = error;
    if (typeof this.catchCallbackFn === 'function') {
      this.catchCallbackFn(error);
      this.promiseState = 'REJECTED';
    }
  }

  then(thenCallbackFn) {
    this.thenCallbackFn = thenCallbackFn;
    // execute then function if callback function is synchronous
    if (this.isResolveCalled && this.promiseState === 'PENDING') {
      this.thenCallbackFn(this.promiseValue);
      this.promiseState = 'RESOLVED';
    }
    return this;
  }

  catch(catchCallbackFn) {
    this.catchCallbackFn = catchCallbackFn;
    if (this.isRejectCalled && this.promiseState === 'PENDING') {
      this.catchCallbackFn(this.promiseValue);
      this.promiseState = 'REJECTED';
    }
    return this;
  }
}

const promise = new MyPromise((resolve) => {
  setTimeout(() => resolve('Success'), 0);
});

promise
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
