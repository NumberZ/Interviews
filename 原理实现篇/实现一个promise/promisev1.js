function isFunction(f) {
  return typeof f === 'function';
}

// 状态定义
const PENDING = 'PENDING';
const FULFILLED = 'fulfilled';
const REJECTED = 'REJECTED';

class PromiseV1 {
  static resolve(value) {
    if (value instanceof PromiseV1) return value;
    return new Promisev1(resolve => reslove(value));
  }
  static all(list) {
    return new Promisev1((resolve, reject) => {
      let count = 0;
      let values = [];
      for (let [i, p] of list.entries()) {
        this.resolve(p).then(
          res => {
            values[i] = res;
            count++;
            if (count === list.length) resolve(values);
          },
          err => {
            reject(err);
          }
        );
      }
    });
  }

  static race(list) {
    return new PromiseV1((resolve, reject) => {
      for (let p of list) {
        this.resolve(p).then(
          res => {
            resolve(res);
          },
          err => {
            reject(er);
          }
        );
      }
    });
  }

  static finally(fn) {
    return this.then(
      value => {
        return PromiseV1.resolve(fn()).then(() => value);
      },
      error => {
        return PromiseV1.resolve(fn()).then(() => throw error);
      }
    );
  }

  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error('参数必须是函数');
    }
    this._value = null;
    this._status = PENDING;
    this._fulfilledQueues = [];
    this._rejectQueues = [];
    try {
      handle(this._resolve.bind(this), this._reject.bind(this));
    } catch (e) {
      this._reject(e);
    }
  }

  _resolve(val) {
    if (this._status !== PENDING) return;
    const runFulfilled = value => {
      let cb;
      while ((cb = this._fulfilledQueues.shift())) {
        cb(value);
      }
    };
    this._value = val;
    this._status = FULFILLED;
    runFulfilled(val);
  }

  _reject(val) {
    if (this._status !== PENDING) return;
    this._value = val;
    this._status = REJECTED;
    let cb;
    while ((cb = this._rejectQueues.shift())) {
      cb(val);
    }
  }

  then(onFulfilled, onRejected) {
    const { _value, _status } = this;
    return new PromiseV1((onFulfilledNext, onRejectNext) => {
      let fulfilled = value => {
        if (!isFunction(onFulfilled)) {
          onFulfilledNext(value);
        } else {
          let res = onFulfilled(value);
          if (res instanceof PromiseV1) {
            res.then(onFulfilledNext, onRejectNext);
          } else {
            onRejectNext(res);
          }
        }
      };
      let reject = value => {
        if (!isFunction(onRejected)) {
          onRejectNext(value);
        } else {
          let res = onRejected(value);
          onRejectNext(res);
        }
      };

      switch (_status) {
        case PENDING:
          this._fulfilledQueues.push(fulfilled);
          this._rejectQueues.push(reject);
          break;
        case FULFILLED:
          fulfiled(_value);
          break;
        case REJECTED:
          reject(_value);
          break;
      }
    });
  }

  catch(fn) {
    return this.then(undefined, fn);
  }
}

const badPromise = new PromiseV1((resolve, reject) => {
  setTimeout(() => {
    reject('Error');
  }, 800);
});

badPromise.then(() => {
  throw new Error('This code should not run');
}, console.log); // after 800ms, print out 'Error'

badPromise.catch(error => {
  console.log('Oh no ' + error);
}); // after the above prints, immediately print 'Oh no Error'
